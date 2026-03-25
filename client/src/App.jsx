import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WaFloat from './components/WaFloat';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Servizi from './pages/Servizi';
import Noleggio from './pages/Noleggio';
import Gallery from './pages/Gallery';
import Contatti from './pages/Contatti';

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/servizi"   element={<Servizi />} />
          <Route path="/noleggio"  element={<Noleggio />} />
          <Route path="/gallery"   element={<Gallery />} />
          <Route path="/contatti"  element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
      <WaFloat />
      <CookieBanner />
    </BrowserRouter>
  );
}
