import { NavLink } from 'react-router-dom';
import { BUSINESS, waLink, WA_MESSAGES } from '../data/business';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <NavLink to="/" className="logo">
              <img
                src="/images/logo.png"
                alt="Primo Traslochi"
                style={{ height: '58px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </NavLink>
            <p>Dal 1990, traslochi professionali nelle province di Pavia, Lodi, Cremona e Milano. La cura artigianale al tuo servizio.</p>
            <p className="piva">P.IVA: {BUSINESS.piva}</p>
          </div>

          <div className="footer-col">
            <h4>Navigazione</h4>
            <ul>
              {[
                ['/', 'Home'],
                ['/chi-siamo', 'Chi Siamo'],
                ['/servizi', 'Servizi'],
                ['/noleggio', 'Noleggio'],
                ['/gallery', 'Gallery'],
                ['/contatti', 'Contatti'],
              ].map(([to, label]) => (
                <li key={to}><NavLink to={to}>{label}</NavLink></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contatti</h4>
            <ul className="contact-list">
              <li>
                <i className="fa-solid fa-phone" />
                <a href={BUSINESS.phoneTel}>{BUSINESS.phoneDisplay}</a>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp" />
                <a href={waLink(WA_MESSAGES.generic)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot" />
                <span>{BUSINESS.address}</span>
              </li>
              <li>
                <i className="fa-solid fa-map-location-dot" />
                <span>{BUSINESS.areas}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Primo Traslochi &mdash; <a href="https://www.bdfcommunication.it" target="_blank" rel="noopener noreferrer">BDF communication</a></p>
          <div className="footer-legal">
            <a href="https://www.primotraslochi2.it/Privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://www.primotraslochi2.it/Privacy" target="_blank" rel="noopener noreferrer">Termini</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
