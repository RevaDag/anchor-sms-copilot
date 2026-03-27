import { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SLIDES } from '../data/slides';
import './PresentationPage.css';

export default function PresentationPage() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const total = SLIDES.length;

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(total - 1, c + 1)), [total]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prev();
      if (e.key === 'Escape') navigate('/prototype');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next, navigate]);

  const progress = (current / (total - 1)) * 100;

  return (
    <div className="pres-root">
      <header className="pres-header">
        <div className="pres-logo">
          <span>⚓</span>
          <span>Anchor · SMS Copilot</span>
        </div>
        <Link to="/prototype" className="pres-exit">To the prototype →</Link>
      </header>

      <div className="pres-progress-track">
        <div className="pres-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="pres-viewport">
        {/* key=current forces full remount on each slide change so CSS animations replay */}
        <div key={current} className="pres-slide">
          <SlideContent slide={SLIDES[current]} navigate={navigate} />
        </div>
      </div>

      {current > 0 && (
        <button className="pres-nav pres-nav-prev" onClick={prev} aria-label="Previous slide">‹</button>
      )}
      {current < total - 1 && (
        <button className="pres-nav pres-nav-next" onClick={next} aria-label="Next slide">›</button>
      )}

      <div className="pres-counter">{current + 1} / {total}</div>

      <div className="pres-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`pres-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function SlideContent({ slide, navigate }) {
  switch (slide.type) {
    case 'title':      return <SlideTitle      data={slide} />;
    case 'assignment': return <SlideAssignment data={slide} />;
    case 'team':       return <SlideTeam       data={slide} />;
    case 'section':    return <SlideSection    data={slide} />;
    case 'overview':   return <SlideOverview   data={slide} />;
    case 'grid':       return <SlideGrid       data={slide} />;
    case 'table':      return <SlideTable      data={slide} />;
    case 'steps':      return <SlideSteps      data={slide} />;
    case 'two-col':    return <SlideTwoCol     data={slide} />;
    case 'verdict':    return <SlideVerdict    data={slide} />;
    case 'cta':        return <SlideCTA        data={slide} navigate={navigate} />;
    default:           return null;
  }
}

function SlideTitle({ data }) {
  return (
    <div className="pres-title-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h1 className="pres-title-headline">{data.headline}</h1>
      <p className="pres-title-subline">{data.subline}</p>
      <div className="pres-title-divider" />
      <div className="pres-title-hint">Press → or click the arrow to begin</div>
    </div>
  );
}

function SlideSection({ data }) {
  return (
    <div className="pres-section-slide">
      <div className="pres-section-bg-num" aria-hidden="true">{data.number}</div>
      <div className="pres-section-label-tag">Section {data.number}</div>
      <div className="pres-section-divider" />
      <h2 className="pres-section-title">{data.title}</h2>
      <p className="pres-section-subtitle">{data.subtitle}</p>
    </div>
  );
}

function SlideOverview({ data }) {
  return (
    <div className="pres-generic-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <div className="pres-overview-blocks">
        <div className="pres-overview-block pres-overview-context">
          <div className="pres-overview-block-label">Context</div>
          <p className="pres-overview-text">{data.context}</p>
        </div>
        <div className="pres-overview-block pres-overview-proposal">
          <div className="pres-overview-block-label">The Proposal</div>
          <p className="pres-overview-text">{data.proposal}</p>
        </div>
      </div>
    </div>
  );
}

function SlideAssignment({ data }) {
  return (
    <div className="pres-generic-slide pres-assignment-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <blockquote className="pres-brief-quote">"{data.brief}"</blockquote>
      <p className="pres-brief-context">{data.context}</p>
      <div className="pres-assignment-body">
        <div className="pres-deliverables">
          <div className="pres-section-label">What was expected</div>
          {data.deliverables.map((d, i) => (
            <div key={i} className="pres-deliverable-row">
              <span className="pres-deliverable-num">{d.num}</span>
              <div>
                <span className="pres-deliverable-label">{d.label}</span>
                <span className="pres-deliverable-body"> — {d.body}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pres-criteria-card">
          <div className="pres-section-label">Evaluated on</div>
          <div className="pres-criteria-list">
            {data.criteria.map((c, i) => (
              <span key={i} className="pres-criteria-badge">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideTeam({ data }) {
  return (
    <div className="pres-generic-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h2 className="pres-slide-title">{data.title}</h2>
      <p className="pres-slide-subtitle">{data.subtitle}</p>
      <div className="pres-team-grid">
        {data.agents.map((agent, i) => (
          <div key={i} className="pres-agent-card">
            <div className="pres-agent-header">
              <span className="pres-agent-icon">{agent.icon}</span>
              <span className="pres-agent-role">{agent.role}</span>
            </div>
            <p className="pres-agent-contribution">{agent.contribution}</p>
            <a
              href={agent.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pres-agent-link"
              onClick={e => e.stopPropagation()}
            >
              {agent.linkLabel} ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideGrid({ data }) {
  return (
    <div className="pres-generic-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h2 className="pres-slide-title">{data.title}</h2>
      {data.subtitle && <p className="pres-slide-subtitle">{data.subtitle}</p>}
      <div className={`pres-grid pres-grid-${data.columns}`}>
        {data.items.map((item, i) => (
          <div key={i} className="pres-card">
            <span className="pres-card-icon">{item.icon}</span>
            <div className="pres-card-title">{item.title}</div>
            <div className="pres-card-body">{item.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideTable({ data }) {
  return (
    <div className="pres-generic-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h2 className="pres-slide-title">{data.title}</h2>
      {data.subtitle && <p className="pres-slide-subtitle">{data.subtitle}</p>}
      <div className="pres-table-wrap">
        <table className="pres-table">
          <thead>
            <tr>
              {data.headers.map((h, i) => (
                <th key={i} className={data.highlightCol === i ? 'pres-col-highlight' : ''}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci} className={data.highlightCol === ci ? 'pres-col-highlight' : ''}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SlideSteps({ data }) {
  return (
    <div className="pres-generic-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h2 className="pres-slide-title">{data.title}</h2>
      <p className="pres-slide-subtitle pres-step-query">{data.subtitle}</p>
      {data.badge && <div className="pres-step-badge">{data.badge}</div>}
      <div className="pres-steps">
        {data.steps.map((step, i) => (
          <div key={i} className="pres-step">
            <div className="pres-step-num">{step.num}</div>
            <div className="pres-step-content">
              <div className="pres-step-label">{step.label}</div>
              <div className="pres-step-body">{step.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideTwoCol({ data }) {
  return (
    <div className="pres-generic-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h2 className="pres-slide-title">{data.title}</h2>
      <div className="pres-two-col">
        {[data.left, data.right].map((col, i) => (
          <div key={i} className="pres-col-card">
            <div className="pres-col-heading">{col.heading}</div>
            {col.badge && (
              <span className="pres-col-badge" style={{ background: col.badgeColor }}>{col.badge}</span>
            )}
            <div className="pres-col-items">
              {col.items.map((item, j) => (
                <div key={j} className="pres-col-item">{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideVerdict({ data }) {
  return (
    <div className="pres-verdict-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <blockquote className="pres-verdict-quote">{data.headline}</blockquote>
      <p className="pres-verdict-sub">{data.subline}</p>
    </div>
  );
}

function SlideCTA({ data, navigate }) {
  return (
    <div className="pres-cta-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h2 className="pres-cta-headline">{data.headline}</h2>
      <p className="pres-cta-sub">{data.subline}</p>
      <button className="pres-cta-btn" onClick={() => navigate('/prototype')}>
        {data.buttonLabel}
      </button>
    </div>
  );
}
