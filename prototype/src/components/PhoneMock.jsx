import { useState, useRef, useEffect } from 'react';

export default function PhoneMock({ bubbles, onSend, isLoading }) {
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [bubbles]);

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSend();
  };

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
              <p>Try: <em>"Draft a $4k agreement with Sarah, 50% upfront"</em></p>
              <p>or use the <strong>Demo Step</strong> button above.</p>
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

        <div className="chat-input-bar">
          <input
            className="chat-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Text Anchor..."
            disabled={isLoading}
          />
          <button className="chat-send" onClick={handleSend} disabled={isLoading || !input.trim()}>
            ↑
          </button>
        </div>
      </div>
      <div className="phone-home-bar" />
    </div>
  );
}
