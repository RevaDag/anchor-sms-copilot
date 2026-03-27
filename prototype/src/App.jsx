import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AgreementProvider } from './AgreementContext';
import PrototypePage from './pages/PrototypePage';
import PlatformPage from './pages/PlatformPage';
import PresentationPage from './pages/PresentationPage';

export default function App() {
  return (
    <AgreementProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"             element={<Navigate to="/presentation" replace />} />
          <Route path="/presentation" element={<PresentationPage />} />
          <Route path="/prototype"    element={<PrototypePage />} />
          <Route path="/platform"     element={<PlatformPage />} />
        </Routes>
      </BrowserRouter>
    </AgreementProvider>
  );
}
