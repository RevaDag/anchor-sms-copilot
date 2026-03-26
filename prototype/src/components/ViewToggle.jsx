import { Link, useLocation } from 'react-router-dom';
import './ViewToggle.css';

export default function ViewToggle({ light = false }) {
  const { pathname } = useLocation();

  return (
    <div className={`view-toggle${light ? ' light' : ''}`}>
      <Link to="/" className={`vt-tab${pathname === '/' ? ' active' : ''}`}>
        <span className="vt-icon">📱</span>
        SMS Copilot
      </Link>
      <Link to="/platform" className={`vt-tab${pathname === '/platform' ? ' active' : ''}`}>
        <span className="vt-icon">🖥</span>
        Platform
      </Link>
    </div>
  );
}
