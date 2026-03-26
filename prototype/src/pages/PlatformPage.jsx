import { Link } from 'react-router-dom';
import { useAgreement } from '../AgreementContext';
import ViewToggle from '../components/ViewToggle';
import './PlatformPage.css';

const Icon = {
  dashboard: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  proposals: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>,
  agreements: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  billing: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  invoices: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>,
  payouts: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  contacts: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  services: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  reports: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  integrations: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  settings: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  gift: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
  chevron: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>,
  search: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  more: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>,
  bell: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  help: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  plus: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
};

const NAV = [
  { key: 'dashboard',    label: 'Dashboard' },
  { key: 'proposals',    label: 'Proposals',    arrow: true },
  { key: 'agreements',   label: 'Agreements',   active: true },
  { key: 'billing',      label: 'Billing' },
  { key: 'invoices',     label: 'Invoices' },
  { key: 'payouts',      label: 'Payouts' },
  { key: 'contacts',     label: 'Contacts' },
  { key: 'services',     label: 'Services',     arrow: true },
  { key: 'reports',      label: 'Reports' },
  { key: 'integrations', label: 'Integrations', arrow: true },
  { key: 'settings',     label: 'Settings',     arrow: true },
  { key: 'gift',         label: 'Refer & Earn' },
];

function fmt(date) {
  if (!date) return '—';
  return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function PlatformPage() {
  const { agreement, pendingConfirm } = useAgreement();
  const today = fmt(new Date());

  const rows = [];
  if (agreement) {
    rows.push({
      id: 1,
      company: agreement.client_name || 'Client',
      status: 'Active',
      assignee: 'Yam Cohen',
      effectiveDate: today,
      paymentMethod: null,
      lastBilled: agreement.milestones?.some(m => m.status === 'paid') ? today : null,
    });
  } else if (pendingConfirm) {
    rows.push({
      id: 1,
      company: pendingConfirm.client_name || 'Client',
      status: 'Pending',
      assignee: 'Yam Cohen',
      effectiveDate: today,
      paymentMethod: null,
      lastBilled: null,
    });
  }

  return (
    <div className="ap-root">
      {/* ── Sidebar ── */}
      <aside className="ap-sidebar">
        <div className="ap-logo">
          <div className="ap-logo-icon">
            <svg viewBox="0 0 36 36" width="30" height="30">
              <defs>
                <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee"/>
                  <stop offset="100%" stopColor="#818cf8"/>
                </linearGradient>
              </defs>
              <circle cx="18" cy="18" r="18" fill="url(#lg)"/>
              <circle cx="18" cy="12" r="4" fill="white"/>
              <line x1="18" y1="16" x2="18" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="11" y1="22" x2="25" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="11" cy="26" r="3" fill="none" stroke="white" strokeWidth="2"/>
              <circle cx="25" cy="26" r="3" fill="none" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          <span className="ap-logo-word">anchor</span>
        </div>

        <div className="ap-workspace">
          <div className="ap-ws-icon">K</div>
          <span className="ap-ws-name">Kukui</span>
          {Icon.chevron}
        </div>

        <nav className="ap-nav">
          {NAV.map(item => (
            <div key={item.key} className={`ap-nav-item${item.active ? ' active' : ''}`}>
              <span className="ap-nav-icon">{Icon[item.key]}</span>
              <span className="ap-nav-label">{item.label}</span>
              {item.arrow && <span className="ap-nav-arrow">{Icon.chevron}</span>}
            </div>
          ))}
        </nav>

        <div className="ap-sidebar-foot">
          <button className="ap-bill-btn">
            <span style={{ fontSize: 16, lineHeight: 1 }}>+</span> Bill client
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="ap-main">
        {/* Topbar */}
        <div className="ap-topbar">
          <div className="ap-topbar-left">
            <ViewToggle light />
          </div>
          <div className="ap-topbar-right">
            <button className="ap-topbar-icon">{Icon.help}</button>
            <button className="ap-topbar-icon ap-bell">{Icon.bell}</button>
            <div className="ap-avatar">YC</div>
          </div>
        </div>

        {/* Content */}
        <div className="ap-content">
          <div className="ap-page-head">
            <h1 className="ap-page-title">Agreements</h1>
            <div className="ap-page-actions">
              <button className="ap-btn-secondary">
                More Actions {Icon.chevron}
              </button>
              <div className="ap-btn-primary-group">
                <button className="ap-btn-primary">Create proposal</button>
                <button className="ap-btn-primary ap-btn-primary-arrow">{Icon.chevron}</button>
              </div>
            </div>
          </div>

          {/* Filter bar */}
          <div className="ap-filters">
            <div className="ap-search">
              {Icon.search}
              <input type="text" placeholder="Search..." className="ap-search-input" />
            </div>
            <button className="ap-filter-pill">
              Agreement status (2) {Icon.chevron}
            </button>
            <button className="ap-add-filter">
              {Icon.plus} Add filter
            </button>
            <button className="ap-bulk-actions" style={{ marginLeft: 'auto' }}>
              Bulk actions {Icon.chevron}
            </button>
          </div>

          <div className="ap-count">{rows.length} agreement{rows.length !== 1 ? 's' : ''}</div>

          {/* Table */}
          <div className="ap-table-wrap">
            <table className="ap-table">
              <thead>
                <tr>
                  <th className="th-check"><input type="checkbox" /></th>
                  <th>Company name <span className="sort">↕</span></th>
                  <th>Status <span className="sort">↕</span></th>
                  <th>Assignee <span className="sort">↕</span></th>
                  <th className="sort-active">Effective date <span className="sort">↓</span></th>
                  <th>Payment method <span className="sort">↕</span></th>
                  <th>Last Billed <span className="sort">↕</span></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="ap-empty-cell">
                      <div className="ap-empty">
                        <p style={{ marginBottom: 4, color: '#374151', fontWeight: 500 }}>No agreements yet</p>
                        <p style={{ fontSize: 12 }}>Use the SMS Copilot to draft one.</p>
                        <Link to="/" className="ap-goto-copilot">← Go to SMS Copilot</Link>
                      </div>
                    </td>
                  </tr>
                ) : (
                  rows.map(row => (
                    <tr key={row.id} className="ap-row">
                      <td className="td-check"><input type="checkbox" /></td>
                      <td>
                        <div className="ap-company">{row.company}</div>
                        <div className="ap-sub">Untitled agreement</div>
                      </td>
                      <td>
                        <span className={`ap-status ap-status-${row.status.toLowerCase()}`}>
                          {row.status}
                        </span>
                      </td>
                      <td>{row.assignee}</td>
                      <td>{row.effectiveDate}</td>
                      <td className={row.paymentMethod ? '' : 'ap-not-set'}>
                        {row.paymentMethod || 'Not set'}
                      </td>
                      <td>{row.lastBilled || '—'}</td>
                      <td><button className="ap-row-more">{Icon.more}</button></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
