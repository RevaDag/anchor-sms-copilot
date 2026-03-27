import { useRef, useEffect } from 'react';

export default function PhoneMock({ bubbles, isLoading }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [bubbles]);

  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-contact-bar">
          <div className="contact-avatar">A</div>
          <div className="contact-info">
            <span className="contact-name">Anchor Copilot</span>
            <span className="contact-status">AI-powered · End-to-end encrypted</span>
          </div>
        </div>

        <div className="chat-scroll" ref={scrollRef}>
          {bubbles.length === 0 && (
            <div className="chat-empty">
              <p>Use the shortcuts on the left to try a command.</p>
            </div>
          )}
          {bubbles.map(b => (
            <div key={b.id} className={`bubble bubble-${b.from}`}>
              {b.text}
            </div>
          ))}
          {isLoading && (
            <div className="bubble bubble-bot typing">
              <span /><span /><span />
            </div>
          )}
        </div>
      </div>
      <div className="phone-home-bar" />
    </div>
  );
}
