import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/',          label: 'Home',      end: true },
  { to: '/chi-siamo', label: 'Chi Siamo', end: false },
  { to: '/servizi',   label: 'Servizi',   end: false },
  { to: '/noleggio',  label: 'Noleggio',  end: false },
  { to: '/gallery',   label: 'Gallery',   end: false },
];

export default function Navbar() {
  const [solid, setSolid]     = useState(false);
  const [open,  setOpen]      = useState(false);
  const [logoOk, setLogoOk]   = useState(true);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar${solid ? ' solid' : ''}`} id="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo" onClick={close}>
          {logoOk ? (
            <img
              src="/images/logo.png"
              alt="Primo Traslochi"
              onError={() => setLogoOk(false)}
              style={{ height: '68px', width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          ) : (
            <>
              <i className="fa-solid fa-truck-moving logo-icon" />
              <span>Primo<strong>Traslochi</strong></span>
            </>
          )}
        </NavLink>

        {/* Backdrop */}
        {open && (
          <div
            aria-hidden="true"
            style={{ position: 'fixed', inset: 0, zIndex: 800, background: 'rgba(0,0,0,.45)' }}
            onClick={close}
          />
        )}

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
          style={{ position: 'relative', zIndex: 802 }}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav-menu${open ? ' open' : ''}`} style={{ zIndex: 801 }}>
          {LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={close}
            >
              {label}
            </NavLink>
          ))}
          <NavLink to="/contatti" className="nav-link nav-cta" onClick={close}>
            Preventivo Gratuito
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
