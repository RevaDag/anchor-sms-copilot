import { createContext, useContext, useState, useCallback } from 'react';

const AgreementContext = createContext(null);

const DEMO_SCRIPT = [
  "Draft a $4k agreement with Sarah, 50% upfront",
  "Yes",
  "Add $300 for extra revisions",
];

export function AgreementProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [bubbles, setBubbles] = useState([]);
  const [agreement, setAgreement] = useState(null);
  const [clientBubbles, setClientBubbles] = useState([]);
  const [pendingConfirm, setPendingConfirm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [demoIndex, setDemoIndex] = useState(0);

  const addBubble = (from, text) => {
    setBubbles(prev => [...prev, { from, text, id: Date.now() + Math.random() }]);
  };

  const addClientBubble = (from, text) => {
    setClientBubbles(prev => [...prev, { from, text, id: Date.now() + Math.random() }]);
  };

  const handlePlatformAction = useCallback((action, payload) => {
    if (action === 'draft_agreement') {
      const split = payload.split || [50, 25, 25];
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
          milestones: prev.milestones.map((m, i) =>
            i === 0 ? { ...m, status: 'pending' } : m
          ),
          lineItems: [],
          sentAt: new Date().toLocaleTimeString(),
          createdDate: new Date(),
        };
        setAgreement(confirmed);
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
      setAgreement(prev => {
        if (!prev) return prev;
        const milestones = prev.milestones.map((m, i) => {
          if (i === payload.milestone_index) return { ...m, status: 'paid' };
          if (i === payload.milestone_index + 1) return { ...m, status: 'pending' };
          return m;
        });
        return { ...prev, milestones };
      });
    }
  }, []);

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
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: JSON.stringify(data) }]);
      addBubble('bot', data.sms_reply);
      handlePlatformAction(data.action, data.payload);
    } catch {
      addBubble('bot', 'Connection error. Is the backend running on port 3001?');
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading, handlePlatformAction]);

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
        addBubble('bot', `Sarah paid $${prev.milestones[0]?.amount?.toLocaleString()}. Milestone 1 unlocked.`);
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

  const reset = () => {
    setMessages([]);
    setBubbles([]);
    setAgreement(null);
    setClientBubbles([]);
    setPendingConfirm(null);
    setDemoIndex(0);
  };

  const hasPendingLineItem = agreement?.lineItems?.some(li => li.status === 'pending_approval');

  return (
    <AgreementContext.Provider value={{
      messages, bubbles, agreement, clientBubbles, pendingConfirm,
      isLoading, demoIndex, hasPendingLineItem,
      sendMessage, handlePlatformAction, handleClientApprove,
      handleClientApproveLineItem, runDemo, reset,
      DEMO_SCRIPT_LENGTH: DEMO_SCRIPT.length,
    }}>
      {children}
    </AgreementContext.Provider>
  );
}

export const useAgreement = () => useContext(AgreementContext);
