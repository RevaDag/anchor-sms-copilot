import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { mockAgreements } from './data/mockAgreements';

const AgreementContext = createContext(null);

const DEMO_SCRIPT = [
  "Draft a $4k agreement with Rachel, 50% upfront",
  "Yes",
  "Add $300 for extra revisions",
];

const INITIAL_CLIENT_BUBBLES = {
  'Sarah Johnson': [],
  'David Lee':     [],
  'Maya Cohen':    [],
  'James Park':    [],
};

export function AgreementProvider({ children }) {
  const [messages, setMessages]         = useState([]);
  const [bubbles, setBubbles]           = useState([]);
  const [agreement, setAgreement]       = useState(null);
  const [agreements, setAgreements]     = useState(mockAgreements);
  const [clientBubbles, setClientBubbles] = useState([]);
  const [clientPhoneBubbles, setClientPhoneBubbles] = useState(INITIAL_CLIENT_BUBBLES);
  const [pendingConfirm, setPendingConfirm] = useState(null);
  const [isLoading, setIsLoading]       = useState(false);
  const [demoIndex, setDemoIndex]       = useState(0);

  // Keep a ref so handlePlatformAction can read current agreements without stale closure
  const agreementsRef = useRef(agreements);
  useEffect(() => { agreementsRef.current = agreements; }, [agreements]);

  const addBubble = (from, text) =>
    setBubbles(prev => [...prev, { from, text, id: Date.now() + Math.random() }]);

  const addClientBubble = (from, text) =>
    setClientBubbles(prev => [...prev, { from, text, id: Date.now() + Math.random() }]);

  const addClientPhoneBubble = (clientName, from, text, delay = 0) => {
    setTimeout(() => {
      setClientPhoneBubbles(prev => ({
        ...prev,
        [clientName]: [...(prev[clientName] || []), { from, text, id: Date.now() + Math.random() }],
      }));
    }, delay);
  };

  const handlePlatformAction = useCallback((action, payload) => {

    if (action === 'draft_agreement') {
      const split = payload.split || [50, 50];
      const milestones = split.map((pct, i) => ({
        index: i,
        label: i === 0 ? 'Upfront' : i === split.length - 1 ? 'Final' : `Milestone ${i}`,
        amount: Math.round(payload.total_amount * pct / 100),
        status: 'locked',
      }));
      setPendingConfirm({ ...payload, milestones });
    }

    if (action === 'confirm') {
      setPendingConfirm(prev => {
        if (!prev) return prev;
        const confirmed = {
          ...prev,
          id: `agr-${Date.now()}`,
          status: 'active',
          milestones: prev.milestones.map((m, i) =>
            i === 0 ? { ...m, status: 'pending' } : m
          ),
          line_items: [],
          lineItems: [],
          sentAt: new Date().toLocaleTimeString(),
          created_date: new Date().toISOString(),
          effective_date: new Date().toISOString(),
          payment_method: null,
          last_reminded: null,
        };
        setAgreement(confirmed);
        setAgreements(prevList => [confirmed, ...prevList]);
        setTimeout(() => {
          addClientBubble('bot', `Hi ${confirmed.client_name}! Anchor sent you a payment agreement for $${confirmed.total_amount.toLocaleString()}. Tap to review and approve.`);
        }, 1000);
        return null;
      });
    }

    if (action === 'add_line_item' && payload) {
      setAgreement(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          lineItems: [...(prev.lineItems || []), { ...payload, status: 'pending_approval', id: Date.now() }],
        };
      });
      setTimeout(() => {
        addClientBubble('bot', `New line item: "${payload.description}" — $${payload.amount}. Reply YES to approve.`);
      }, 800);
    }

    if (action === 'mark_paid') {
      const targetName = payload?.client_name;
      const idx = payload?.milestone_index ?? 0;
      if (targetName) {
        setAgreements(prev => prev.map(a => {
          if (!a.client_name.toLowerCase().includes(targetName.toLowerCase())) return a;
          const milestones = a.milestones.map((m, i) => {
            if (i === idx) return { ...m, status: 'paid' };
            if (i === idx + 1) return { ...m, status: 'pending' };
            return m;
          });
          const allPaid = milestones.every(m => m.status === 'paid');
          return { ...a, milestones, status: allPaid ? 'completed' : 'active' };
        }));
      } else {
        setAgreement(prev => {
          if (!prev) return prev;
          const milestones = prev.milestones.map((m, i) => {
            if (i === idx) return { ...m, status: 'paid' };
            if (i === idx + 1) return { ...m, status: 'pending' };
            return m;
          });
          return { ...prev, milestones };
        });
      }
    }

    if (action === 'send_reminder') {
      const targetName    = payload?.client_name;
      const allOverdue    = payload?.all_overdue;
      const allClients    = payload?.all_clients;
      const currentAgrs   = agreementsRef.current;

      let clientsToRemind;
      if (allClients) {
        clientsToRemind = currentAgrs.filter(a =>
          Object.keys(INITIAL_CLIENT_BUBBLES).some(k => k === a.client_name)
        );
      } else if (allOverdue) {
        clientsToRemind = currentAgrs.filter(a =>
          ['overdue', 'pending'].includes(a.status) &&
          Object.keys(INITIAL_CLIENT_BUBBLES).some(k => k === a.client_name)
        );
      } else if (targetName) {
        clientsToRemind = currentAgrs.filter(a =>
          a.client_name.toLowerCase().includes(targetName.toLowerCase()) &&
          Object.keys(INITIAL_CLIENT_BUBBLES).some(k => k === a.client_name)
        );
      } else {
        clientsToRemind = [];
      }

      clientsToRemind.forEach((agr, i) => {
        const pendingMs = agr.milestones?.find(m => ['overdue', 'pending'].includes(m.status));
        const amount = pendingMs?.amount || agr.total_amount;
        const firstName = agr.client_name.split(' ')[0];
        const statusNote = agr.status === 'overdue'
          ? 'overdue since ' + new Date(pendingMs?.due_date || agr.effective_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
          : 'due now';
        const msg = `Hi ${firstName}! 👋 Quick reminder from Anchor — your $${amount.toLocaleString()} payment for "${agr.description}" is ${statusNote}. Pay at anchor.co/pay`;
        addClientPhoneBubble(agr.client_name, 'bot', msg, i * 800);
      });

      // update last_reminded in agreements
      if (allClients || allOverdue) {
        const filter = allClients
          ? a => Object.keys(INITIAL_CLIENT_BUBBLES).some(k => k === a.client_name)
          : a => ['overdue', 'pending'].includes(a.status);
        setAgreements(prev => prev.map(a => filter(a) ? { ...a, last_reminded: new Date().toISOString() } : a));
      } else if (targetName) {
        setAgreements(prev => prev.map(a =>
          a.client_name.toLowerCase().includes(targetName.toLowerCase())
            ? { ...a, last_reminded: new Date().toISOString() }
            : a
        ));
      }
    }

    if (action === 'update_agreement') {
      const { client_name, field, value } = payload || {};
      if (client_name && field) {
        setAgreements(prev => prev.map(a =>
          a.client_name.toLowerCase().includes(client_name.toLowerCase())
            ? { ...a, [field]: value }
            : a
        ));
      }
    }

  }, []); // setters are stable, agreementsRef is a ref — no deps needed

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || isLoading) return;
    addBubble('user', text);
    setIsLoading(true);
    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, agreements }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: JSON.stringify(data) }]);
      addBubble('bot', data.sms_reply);
      handlePlatformAction(data.action, data.payload);
    } catch {
      addBubble('bot', 'Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading, agreements, handlePlatformAction]);

  const handleClientApprove = () => {
    addClientBubble('user', 'YES — looks good!');
    setTimeout(() => {
      addClientBubble('bot', 'Payment confirmed! You will receive a receipt shortly.');
      setAgreement(prev => {
        if (!prev) return prev;
        const milestones = prev.milestones.map((m, i) => {
          if (i === 0) return { ...m, status: 'paid' };
          if (i === 1) return { ...m, status: 'pending' };
          return m;
        });
        const updated = { ...prev, milestones };
        addBubble('bot', `${prev.client_name} paid $${prev.milestones[0]?.amount?.toLocaleString()}. Milestone 1 unlocked.`);
        return updated;
      });
    }, 1200);
  };

  const handleClientApproveLineItem = () => {
    addClientBubble('user', 'YES');
    setTimeout(() => {
      addClientBubble('bot', 'Extra revision approved. Updated total on its way.');
      setAgreement(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          lineItems: prev.lineItems.map(li =>
            li.status === 'pending_approval' ? { ...li, status: 'approved' } : li
          ),
        };
      });
      addBubble('bot', 'Client approved the extra revision. Agreement updated.');
    }, 1000);
  };

  const runDemo = () => {
    if (demoIndex >= DEMO_SCRIPT.length) return;
    sendMessage(DEMO_SCRIPT[demoIndex]);
    setDemoIndex(i => i + 1);
  };

  const sendHardcoded = (userText, ackText, botReply, action, payload) => {
    addBubble('user', userText);
    setIsLoading(true);
    setTimeout(() => addBubble('bot', ackText), 800);
    setTimeout(() => {
      setIsLoading(false);
      addBubble('bot', botReply);
      if (action) handlePlatformAction(action, payload);
    }, 3800);
  };

  const reset = () => {
    setMessages([]);
    setBubbles([]);
    setAgreement(null);
    setAgreements(mockAgreements);
    setClientBubbles([]);
    setClientPhoneBubbles(INITIAL_CLIENT_BUBBLES);
    setPendingConfirm(null);
    setDemoIndex(0);
  };

  const hasPendingLineItem = agreement?.lineItems?.some(li => li.status === 'pending_approval');

  return (
    <AgreementContext.Provider value={{
      messages, bubbles, agreement, agreements, clientBubbles, clientPhoneBubbles,
      pendingConfirm, isLoading, demoIndex, hasPendingLineItem,
      sendMessage, sendHardcoded, handlePlatformAction,
      handleClientApprove, handleClientApproveLineItem, runDemo, reset,
      DEMO_SCRIPT_LENGTH: DEMO_SCRIPT.length,
    }}>
      {children}
    </AgreementContext.Provider>
  );
}

export const useAgreement = () => useContext(AgreementContext);
