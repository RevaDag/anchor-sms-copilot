import { useRef, useEffect } from 'react';

const STATUS_COLORS = {
  active:    '#059669',
  overdue:   '#DC2626',
  pending:   '#D97706',
  draft:     '#6B7280',
  completed: '#6c47ff',
};

const CLIENT_META = [
  { clientName: 'Sarah Johnson', initial: 'SJ', status: 'active',  amount: '$4,800', description: 'Brand identity' },
  { clientName: 'David Lee',     initial: 'DL', status: 'overdue', amount: '$7,200', description: 'Website redesign' },
  { clientName: 'Maya Cohen',    initial: 'MC', status: 'pending', amount: '$1,900', description: 'Social media kit' },
  { clientName: 'James Park',    initial: 'JP', status: 'active',  amount: '$5,100', description: 'Packaging design' },
];

function MiniPhone({ meta, bubbles }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [bubbles]);

  const color = STATUS_COLORS[meta.status] || '#6c47ff';
  const hasMessages = bubbles.length > 0;

  return (
    <div className={`mini-phone-frame${hasMessages ? ' mini-phone-active' : ''}`}>
      <div className="mini-phone-notch" />
      <div className="mini-phone-screen">

        <div className="mini-contact-bar">
          <div className="mini-avatar" style={{ background: color }}>{meta.initial}</div>
          <div className="mini-contact-info">
            <span className="mini-contact-name">{meta.clientName.split(' ')[0]}</span>
            <span className="mini-status-badge" style={{ color, background: `${color}18` }}>
              {meta.status}
            </span>
          </div>
          <span className="mini-amount">{meta.amount}</span>
        </div>

        <div className="mini-chat-scroll" ref={scrollRef}>
          {bubbles.length === 0 ? (
            <div className="mini-chat-empty">
              <span className="mini-empty-desc">{meta.description}</span>
            </div>
          ) : (
            bubbles.map(b => (
              <div key={b.id} className={`mini-bubble mini-bubble-${b.from}`}>
                {b.text}
              </div>
            ))
          )}
        </div>

      </div>
      <div className="mini-phone-home" />
    </div>
  );
}

export default function ClientPhonesGrid({ clientPhoneBubbles }) {
  return (
    <div className="client-phones-grid">
      {CLIENT_META.map(meta => (
        <MiniPhone
          key={meta.clientName}
          meta={meta}
          bubbles={clientPhoneBubbles[meta.clientName] || []}
        />
      ))}
    </div>
  );
}
