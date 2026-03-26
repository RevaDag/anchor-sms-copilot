import { useRef, useEffect } from 'react';

export default function ClientPhone({ bubbles, agreement, onApprove, onApproveLineItem, hasPendingLineItem }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [bubbles]);

  const hasApproved = agreement?.milestones?.some(m => m.status === 'paid');
  const canApprove = agreement && !hasApproved && bubbles.length > 0;

  return (
    <div className="phone-frame phone-frame-client">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-contact-bar">
          <div className="contact-avatar contact-avatar-client">S</div>
          <div className="contact-info">
            <span className="contact-name">Sarah (Client)</span>
            <span className="contact-status">via Anchor · Secure checkout</span>
          </div>
        </div>

        <div className="chat-scroll" ref={scrollRef}>
          {bubbles.length === 0 && (
            <div className="chat-empty">
              <p>Client view</p>
              <p className="chat-empty-sub">Messages will appear here when you send an agreement.</p>
            </div>
          )}
          {bubbles.map(b => (
            <div key={b.id} className={`bubble ${b.from === 'user' ? 'bubble-user' : 'bubble-bot'}`}>
              {b.text}
            </div>
          ))}
        </div>

        <div className="client-actions">
          {canApprove && (
            <button className="btn-approve" onClick={onApprove}>
              Approve & Pay First Milestone
            </button>
          )}
          {hasPendingLineItem && (
            <button className="btn-approve-line" onClick={onApproveLineItem}>
              Approve Extra Line Item
            </button>
          )}
        </div>
      </div>
      <div className="phone-home-bar" />
    </div>
  );
}
