import { useAgreement } from '../AgreementContext';
import { Link } from 'react-router-dom';
import PhoneMock from '../components/PhoneMock';
import ClientPhonesGrid from '../components/ClientPhonesGrid';
import ViewToggle from '../components/ViewToggle';
import '../App.css';

const ACTION_GROUPS = [
  {
    label: 'Check status',
    actions: [
      {
        label: "Who owes me money?",
        ack: "On it — pulling up your outstanding balances now.",
        reply: "David Lee owes $7,200 (overdue since Feb 28) and Maya Cohen owes $1,900 (pending approval). Total outstanding: $9,100.",
        action: null,
      },
      {
        label: "Show all active agreements",
        ack: "Let me check your active agreements real quick.",
        reply: "2 active agreements: Sarah Johnson — $4,800 brand identity (1/2 paid), James Park — $5,100 packaging (2/3 paid).",
        action: null,
      },
      {
        label: "Which agreements are overdue?",
        ack: "Checking for overdue payments across all your agreements...",
        reply: "1 overdue: David Lee — $7,200 website redesign. Upfront payment of $3,600 was due Feb 28. Want me to send a reminder?",
        action: null,
      },
      {
        label: "How much have I collected?",
        ack: "Give me a sec — tallying up your collected payments.",
        reply: "You've collected $9,525 total: Emma Watts $3,600, James Park $3,825, Sarah Johnson $2,400. Another $3,600 is incoming.",
        action: null,
      },
    ],
  },
  {
    label: 'Send reminders',
    actions: [
      {
        label: "Send David a reminder",
        ack: "Sure, sending David a payment reminder now.",
        reply: "Done! Reminder sent to David Lee for his $7,200 website redesign. Payment's been overdue since Feb 28.",
        action: 'send_reminder',
        payload: { client_name: 'David Lee' },
      },
      {
        label: "Send Maya a reminder",
        ack: "On it — sending Maya a nudge about her agreement.",
        reply: "Done! Reminder sent to Maya Cohen for her $1,900 social media kit. Still waiting on her approval.",
        action: 'send_reminder',
        payload: { client_name: 'Maya Cohen' },
      },
      {
        label: "Remind all overdue clients",
        ack: "Let me find all your overdue clients and send reminders.",
        reply: "Reminders sent to David Lee ($7,200 overdue) and Maya Cohen ($1,900 pending). You're in good shape with everyone else!",
        action: 'send_reminder',
        payload: { all_overdue: true },
      },
      {
        label: "Remind all clients",
        ack: "Sending a gentle nudge to all your clients now.",
        reply: "Done! Reminders sent to all 4 clients. David and Maya get payment reminders; Sarah and James get milestone updates.",
        action: 'send_reminder',
        payload: { all_clients: true },
      },
    ],
  },
  {
    label: 'Update agreements',
    actions: [
      {
        label: "Change Maya's total to $2,200",
        ack: "Got it, updating Maya's agreement total now.",
        reply: "Updated! Maya Cohen's social media kit is now $2,200 (was $1,900). I've reflected the change in her agreement.",
        action: 'update_agreement',
        payload: { client_name: 'Maya Cohen', field: 'total_amount', value: 2200 },
      },
      {
        label: "Mark James' last milestone paid",
        ack: "Sure — recording the final payment for James Park.",
        reply: "Marked paid! James Park's final milestone of $1,275 is now settled. His packaging design agreement is complete.",
        action: 'mark_paid',
        payload: { client_name: 'James Park', milestone_index: 2 },
      },
      {
        label: "Mark David's upfront as paid",
        ack: "On it — logging David's upfront payment now.",
        reply: "Done! David Lee's upfront payment of $3,600 is marked as received. His agreement is now active.",
        action: 'mark_paid',
        payload: { client_name: 'David Lee', milestone_index: 0 },
      },
    ],
  },
  {
    label: 'Create new',
    actions: [
      {
        label: "Draft $3k with Rachel, 50% upfront",
        ack: "Sure thing — drafting that agreement for Rachel.",
        reply: "Ready to send: Rachel, $3,000 — $1,500 upfront + $1,500 on delivery. Reply YES to confirm and send it to her.",
        action: 'draft_agreement',
        payload: { client_name: 'Rachel', total_amount: 3000, split: [50, 50], description: 'Design project' },
      },
      {
        label: "Draft $1,500 agreement with Alex",
        ack: "On it — putting together a quick agreement for Alex.",
        reply: "Ready to send: Alex, $1,500 — $750 upfront + $750 on delivery. Reply YES to confirm and send it to him.",
        action: 'draft_agreement',
        payload: { client_name: 'Alex', total_amount: 1500, split: [50, 50], description: 'Design project' },
      },
    ],
  },
];

export default function PrototypePage() {
  const {
    bubbles, clientPhoneBubbles, isLoading,
    sendHardcoded, reset,
  } = useAgreement();

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <Link to="/presentation" className="btn-back-presentation">← Presentation</Link>
          <img src="/anchor-logo-color.svg" height="20" alt="Anchor" className="logo-img" />
          <span className="logo-tag">SMS Copilot · Prototype</span>
        </div>
        <div className="header-center">
          <ViewToggle light />
        </div>
        <div className="header-actions">
          <button className="btn-reset" onClick={reset}>Reset</button>
        </div>
      </header>

      <main className="app-layout">

        {/* ── Action shortcuts ── */}
        <aside className="action-sidebar">
          <p className="action-sidebar-title">Try asking</p>
          {ACTION_GROUPS.map(group => (
            <div key={group.label} className="action-group">
              <p className="action-group-label">{group.label}</p>
              {group.actions.map(item => (
                <button
                  key={item.label}
                  className="action-btn"
                  onClick={() => sendHardcoded(item.label, item.ack, item.reply, item.action, item.payload)}
                  disabled={isLoading}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </aside>

        {/* ── Phones ── */}
        <div className="phones-wrap">
          <section className="panel-label-wrap">
            <p className="panel-label">Your Phone</p>
            <PhoneMock bubbles={bubbles} isLoading={isLoading} />
          </section>

          <section className="panel-label-wrap">
            <p className="panel-label">Your Clients</p>
            <ClientPhonesGrid clientPhoneBubbles={clientPhoneBubbles} />
          </section>
        </div>
      </main>
    </div>
  );
}
