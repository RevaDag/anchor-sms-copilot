import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AgreementProvider } from './AgreementContext';
import PrototypePage from './pages/PrototypePage';
import PlatformPage from './pages/PlatformPage';

export default function App() {
  return (
    <AgreementProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrototypePage />} />
          <Route path="/platform" element={<PlatformPage />} />
        </Routes>
      </BrowserRouter>
    </AgreementProvider>
  );
}
