import { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SLIDES } from '../data/slides';
import './PresentationPage.css';

const INDEX_GROUPS = [
  { label: 'Intro',          slides: [0, 1, 2, 3] },
  { label: 'The Submission', slides: [4, 5] },
  { label: 'Research',       slides: [6, 7, 8, 9, 10, 11] },
  { label: 'Prioritization', slides: [12, 13] },
  { label: 'Technical',      slides: [14, 15, 16, 17, 18] },
  { label: 'Business',       slides: [19, 20, 21, 22, 23] },
  { label: 'Wrap-up',        slides: [24, 25] },
];

function getSlideLabel(slide) {
  switch (slide.type) {
    case 'title':      return slide.headline;
    case 'assignment': return 'The Assignment';
    case 'team':       return slide.title;
    case 'section':    return `§ ${slide.title}`;
    case 'overview':   return 'Overview';
    case 'grid':       return slide.title;
    case 'table':      return slide.title;
    case 'steps':      return slide.title;
    case 'two-col':    return slide.title;
    case 'ideation':   return slide.title;
    case 'kpis':       return slide.eyebrow;
    case 'risks':      return slide.eyebrow;
    case 'verdict':    return 'Strategic Verdict';
    case 'cta':        return 'Live Demo';
    case 'tldr':       return 'TL;DR — Summary';
    default:           return '—';
  }
}

export default function PresentationPage() {
  const [current, setCurrent] = useState(0);
  const [showIndex, setShowIndex] = useState(false);
  const navigate = useNavigate();
  const total = SLIDES.length;
  const tldrIdx = SLIDES.findIndex(s => s.type === 'tldr');

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(total - 1, c + 1)), [total]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prev();
      if (e.key === 'Escape') {
        if (showIndex) setShowIndex(false);
        else navigate('/prototype');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next, navigate, showIndex]);

  const progress = (current / (total - 1)) * 100;

  return (
    <div className="pres-root">
      <header className="pres-header">
        <div className="pres-header-left">
          <div className="pres-logo">
            <img src="/anchor-logo-color.svg" height="20" alt="Anchor SMS Copilot" />
          </div>
          <div className="pres-header-sep" aria-hidden="true" />
          <button
            className="pres-header-btn pres-tldr-btn"
            onClick={() => setCurrent(tldrIdx)}
            title="Jump to summary"
          >
            TL;DR
          </button>
          <button
            className="pres-header-btn pres-index-btn"
            onClick={() => setShowIndex(true)}
            title="Open slide index"
          >
            ≡ Index
          </button>
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

      {current < total - 1 && (
        <div className="pres-next-hint">
          Next → {getSlideLabel(SLIDES[current + 1])}
        </div>
      )}

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

      {showIndex && (
        <SlideIndexPanel
          slides={SLIDES}
          current={current}
          onNavigate={setCurrent}
          onClose={() => setShowIndex(false)}
        />
      )}
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
    case 'ideation':   return <SlideIdeation   data={slide} />;
    case 'kpis':       return <SlideKPIs       data={slide} />;
    case 'risks':      return <SlideRisks      data={slide} />;
    case 'verdict':    return <SlideVerdict    data={slide} />;
    case 'tldr':       return <SlideTldr       data={slide} />;
    case 'cta':        return <SlideCTA        data={slide} navigate={navigate} />;
    default:           return null;
  }
}

function RichText({ text }) {
  if (!text) return null;
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

function SlideTitle({ data }) {
  return (
    <div className="pres-title-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h1 className="pres-title-headline">{data.headline}</h1>
      <p className="pres-title-subline"><RichText text={data.subline} /></p>
      <div className="pres-title-divider" />
      <div className="pres-title-hint">Press → or click the arrow to begin</div>
    </div>
  );
}

function SlideSection({ data }) {
  return (
    <div className="pres-section-slide">
      <div className="pres-section-bg-num" aria-hidden="true">{data.number}</div>
      <div className="pres-section-divider" />
      <h2 className="pres-section-title">{data.title}</h2>
      <p className="pres-section-subtitle">{data.subtitle}</p>
    </div>
  );
}

function SlideOverview({ data }) {
  return (
    <div className="pres-generic-slide pres-overview-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h2 className="pres-overview-headline">{data.headline}</h2>
      <p className="pres-overview-descriptor">{data.descriptor}</p>
      <div className="pres-overview-pillars">
        {data.pillars.map((p, i) => (
          <div key={i} className="pres-overview-pillar" style={{ animationDelay: `${180 + i * 100}ms` }}>
            <span className="pres-overview-pillar-icon">{p.icon}</span>
            <div className="pres-overview-pillar-label">{p.label}</div>
            <p className="pres-overview-pillar-body">{p.body}</p>
          </div>
        ))}
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
            <div className="pres-card-body"><RichText text={item.body} /></div>
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
      {data.subtitle && <p className="pres-slide-subtitle"><RichText text={data.subtitle} /></p>}
      {data.note && <div className="pres-table-note">{data.note}</div>}
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
                {row.map((cell, ci) => {
                  const isObj = cell && typeof cell === 'object';
                  const cellClass = data.highlightCol === ci ? 'pres-col-highlight' : '';
                  return (
                    <td key={ci} className={`${cellClass}${isObj ? ' pres-cell-annotated' : ''}`}>
                      {isObj ? (
                        <span className="pres-cell-annotated-inline">
                          <span className="pres-cell-value"><RichText text={cell.value} /></span>
                          <span className="pres-cell-note"><RichText text={cell.note} /></span>
                        </span>
                      ) : (
                        <RichText text={cell} />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.disclaimer && <p className="pres-table-disclaimer">{data.disclaimer}</p>}
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
              <div className="pres-step-label"><RichText text={step.label} /></div>
              <div className="pres-step-body"><RichText text={step.body} /></div>
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
                <div key={j} className="pres-col-item"><RichText text={item} /></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideIdeation({ data }) {
  return (
    <div className="pres-generic-slide pres-ideation-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h2 className="pres-slide-title">{data.title}</h2>
      {data.subtitle && <p className="pres-slide-subtitle">{data.subtitle}</p>}
      <div className="pres-ideation-grid">
        {data.discarded.map((idea, i) => (
          <div key={i} className="pres-ideation-card">
            <div className="pres-ideation-card-header">
              <span className="pres-ideation-num">{idea.num}</span>
              <span className="pres-ideation-badge pres-ideation-badge--discarded">Discarded</span>
            </div>
            <div className="pres-ideation-card-title">{idea.title}</div>
            <div className="pres-ideation-section">
              <div className="pres-ideation-section-label">The Concept</div>
              <p className="pres-ideation-text"><RichText text={idea.concept} /></p>
            </div>
            <div className="pres-ideation-section">
              <div className="pres-ideation-section-label">Why Discarded</div>
              <p className="pres-ideation-text"><RichText text={idea.reason} /></p>
            </div>
          </div>
        ))}
        <div className="pres-ideation-card pres-ideation-card--selected">
          <div className="pres-ideation-card-header">
            <span className="pres-ideation-num">{data.winner.num}</span>
            <span className="pres-ideation-badge pres-ideation-badge--selected">✓ Selected</span>
          </div>
          <div className="pres-ideation-card-title">{data.winner.title}</div>
          <div className="pres-ideation-section">
            <div className="pres-ideation-section-label">Why It Won</div>
            <p className="pres-ideation-text"><RichText text={data.winner.body} /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideKPIs({ data }) {
  return (
    <div className="pres-generic-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h2 className="pres-slide-title">{data.title}</h2>
      <div className="pres-kpi-list">
        {data.items.map((kpi, i) => (
          <div key={i} className="pres-kpi-card" style={{ animationDelay: `${160 + i * 140}ms` }}>
            <div className="pres-kpi-left">
              <span className="pres-kpi-num">{kpi.num}</span>
              <span className="pres-kpi-icon">{kpi.icon}</span>
              <span className="pres-kpi-title">{kpi.title}</span>
            </div>
            <div className="pres-kpi-middle">
              <div className="pres-kpi-row">
                <span className="pres-kpi-row-label">Measures</span>
                <span className="pres-kpi-row-body">{kpi.measures}</span>
              </div>
              <div className="pres-kpi-row">
                <span className="pres-kpi-row-label">Why it matters</span>
                <span className="pres-kpi-row-body">{kpi.why}</span>
              </div>
            </div>
            <div className="pres-kpi-right">
              <div className="pres-kpi-target-num">{kpi.target}</div>
              <div className="pres-kpi-target-label">{kpi.targetLabel}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const RISK_LEVEL_COLOR = {
  'High':       { border: '#D42B1E', badge: '#FEE9E7', text: '#A01E14' },
  'Medium':     { border: '#C77C1A', badge: '#FEF3E2', text: '#8A5610' },
  'Low–Medium': { border: '#2D7DD2', badge: '#E8F0FB', text: '#1A4F8A' },
  'Low':        { border: '#007A50', badge: '#E6F4EF', text: '#005236' },
};

function SlideRisks({ data }) {
  const colClass = data.items.length === 4 ? 'pres-risks-grid-4'
    : data.items.length === 2 ? 'pres-risks-grid-2'
    : 'pres-risks-grid-3';
  return (
    <div className="pres-generic-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h2 className="pres-slide-title">{data.title}</h2>
      {data.subtitle && <p className="pres-slide-subtitle">{data.subtitle}</p>}
      <div className={`pres-risks-grid ${colClass}`}>
        {data.items.map((item, i) => {
          const lvl = RISK_LEVEL_COLOR[item.level] || RISK_LEVEL_COLOR['Medium'];
          return (
            <div key={i} className="pres-risk-card" style={{ '--risk-border': lvl.border }} >
              <div className="pres-risk-card-header">
                <span className="pres-risk-level-badge" style={{ background: lvl.badge, color: lvl.text }}>
                  {item.level}
                </span>
                <div className="pres-risk-title-row">
                  <span className="pres-risk-icon">{item.icon}</span>
                  <span className="pres-risk-title">{item.title}</span>
                </div>
              </div>
              <div className="pres-risk-section pres-risk-section--risk">
                <div className="pres-risk-section-label">Risk</div>
                <p className="pres-risk-section-body"><RichText text={item.risk} /></p>
              </div>
              <div className="pres-risk-section pres-risk-section--fix">
                <div className="pres-risk-section-label">Fix</div>
                <p className="pres-risk-section-body"><RichText text={item.fix} /></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SlideVerdict({ data }) {
  return (
    <div className="pres-verdict-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <blockquote className="pres-verdict-quote">{data.headline}</blockquote>
      <p className="pres-verdict-sub"><RichText text={data.subline} /></p>
    </div>
  );
}

function SlideTldr({ data }) {
  return (
    <div className="pres-generic-slide pres-tldr-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h2 className="pres-slide-title">{data.headline}</h2>
      <div className="pres-tldr-list">
        {data.items.map((item, i) => (
          <div key={i} className="pres-tldr-row" style={{ animationDelay: `${120 + i * 70}ms` }}>
            <span className="pres-tldr-emoji">{item.emoji}</span>
            <span className="pres-tldr-label">{item.label}</span>
            <p className="pres-tldr-body"><RichText text={item.body} /></p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideCTA({ data, navigate }) {
  return (
    <div className="pres-cta-slide">
      <div className="pres-eyebrow">{data.eyebrow}</div>
      <h2 className="pres-cta-headline">{data.headline}</h2>
      <p className="pres-cta-sub"><RichText text={data.subline} /></p>
      <button className="pres-cta-btn" onClick={() => navigate('/prototype')}>
        {data.buttonLabel}
      </button>
    </div>
  );
}

function SlideIndexPanel({ slides, current, onNavigate, onClose }) {
  return (
    <div className="pres-index-overlay" onClick={onClose}>
      <div className="pres-index-panel" onClick={e => e.stopPropagation()}>
        <div className="pres-index-header">
          <span className="pres-index-title">All Slides</span>
          <button className="pres-index-close" onClick={onClose} aria-label="Close index">✕</button>
        </div>
        <div className="pres-index-body">
          {INDEX_GROUPS.map(group => (
            <div key={group.label} className="pres-index-group">
              <div className="pres-index-group-label">{group.label}</div>
              {group.slides.map(i => (
                <button
                  key={i}
                  className={`pres-index-item${i === current ? ' active' : ''}`}
                  onClick={() => { onNavigate(i); onClose(); }}
                >
                  <span className="pres-index-num">{i + 1}</span>
                  <span className="pres-index-slide-label">{getSlideLabel(slides[i])}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
