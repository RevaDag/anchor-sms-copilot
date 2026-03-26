export default function PlatformPanel({ agreement, pendingConfirm }) {
  const total = agreement
    ? agreement.total_amount + (agreement.lineItems?.filter(l => l.status === 'approved').reduce((s, l) => s + l.amount, 0) || 0)
    : null;

  const paidAmount = agreement?.milestones?.filter(m => m.status === 'paid').reduce((s, m) => s + m.amount, 0) || 0;

  return (
    <div className="platform-panel">
      <div className="platform-header">
        <span className="platform-logo">⚓</span>
        <span className="platform-title">Anchor Dashboard</span>
      </div>

      {!agreement && !pendingConfirm && (
        <div className="platform-empty">
          <div className="platform-empty-icon">📋</div>
          <p>No active agreements</p>
          <p className="platform-empty-sub">Text Anchor to draft one</p>
        </div>
      )}

      {pendingConfirm && !agreement && (
        <div className="platform-card pending-card">
          <div className="card-badge awaiting">Awaiting Confirmation</div>
          <h3 className="card-client">{pendingConfirm.client_name}</h3>
          <div className="card-amount">${pendingConfirm.total_amount?.toLocaleString()}</div>
          <p className="card-desc">{pendingConfirm.description || 'Project agreement'}</p>
          <div className="milestone-preview">
            {pendingConfirm.milestones?.map((m, i) => (
              <div key={i} className="milestone-row milestone-locked">
                <span className="ms-label">{m.label}</span>
                <span className="ms-amount">${m.amount.toLocaleString()}</span>
                <span className="ms-status">🔒</span>
              </div>
            ))}
          </div>
          <p className="card-hint">Reply YES in chat to activate</p>
        </div>
      )}

      {agreement && (
        <div className="platform-card active-card">
          <div className="card-badge active">Active</div>
          <h3 className="card-client">{agreement.client_name}</h3>
          <div className="card-amount">${total?.toLocaleString()}</div>
          <p className="card-sent">Sent at {agreement.sentAt}</p>

          <div className="progress-bar-wrap">
            <div
              className="progress-bar-fill"
              style={{ width: total ? `${Math.min((paidAmount / total) * 100, 100)}%` : '0%' }}
            />
          </div>
          <p className="progress-label">${paidAmount.toLocaleString()} collected of ${total?.toLocaleString()}</p>

          <div className="milestone-list">
            {agreement.milestones?.map((m) => (
              <div key={m.index} className={`milestone-row milestone-${m.status}`}>
                <span className="ms-label">{m.label}</span>
                <span className="ms-amount">${m.amount.toLocaleString()}</span>
                <span className="ms-status">
                  {m.status === 'paid' && '✅'}
                  {m.status === 'pending' && '⏳'}
                  {m.status === 'locked' && '🔒'}
                </span>
              </div>
            ))}
          </div>

          {agreement.lineItems?.length > 0 && (
            <div className="line-items">
              <p className="line-items-title">Extra Line Items</p>
              {agreement.lineItems.map(li => (
                <div key={li.id} className={`line-item line-item-${li.status}`}>
                  <span className="li-desc">{li.description}</span>
                  <span className="li-amount">${li.amount}</span>
                  <span className="li-status">
                    {li.status === 'approved' ? '✅' : '⏳ Pending'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
