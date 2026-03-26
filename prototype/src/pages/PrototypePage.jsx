import { useAgreement } from '../AgreementContext';
import PhoneMock from '../components/PhoneMock';
import ClientPhone from '../components/ClientPhone';
import ViewToggle from '../components/ViewToggle';
import '../App.css';

export default function PrototypePage() {
  const {
    bubbles, clientBubbles, agreement, hasPendingLineItem, isLoading,
    demoIndex, DEMO_SCRIPT_LENGTH,
    sendMessage, handleClientApprove, handleClientApproveLineItem, runDemo, reset,
  } = useAgreement();

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <span className="logo-anchor">⚓</span>
          <span className="logo-text">Anchor</span>
          <span className="logo-tag">SMS Copilot · Prototype</span>
        </div>
        <div className="header-actions">
          <ViewToggle />
          <button className="btn-demo" onClick={runDemo} disabled={isLoading || demoIndex >= DEMO_SCRIPT_LENGTH}>
            {demoIndex >= DEMO_SCRIPT_LENGTH ? 'Demo Complete' : `Demo Step ${demoIndex + 1}/${DEMO_SCRIPT_LENGTH}`}
          </button>
          <button className="btn-reset" onClick={reset}>Reset</button>
        </div>
      </header>

      <main className="app-layout phones-only">
        <section className="panel-label-wrap">
          <p className="panel-label">Your Phone</p>
          <PhoneMock bubbles={bubbles} onSend={sendMessage} isLoading={isLoading} />
        </section>

        <section className="panel-label-wrap">
          <p className="panel-label">Client Phone</p>
          <ClientPhone
            bubbles={clientBubbles}
            agreement={agreement}
            onApprove={handleClientApprove}
            onApproveLineItem={handleClientApproveLineItem}
            hasPendingLineItem={hasPendingLineItem}
          />
        </section>
      </main>
    </div>
  );
}
