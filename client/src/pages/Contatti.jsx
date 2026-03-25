import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CtaBanner from '../components/CtaBanner';
import { BUSINESS, waLink, WA_MESSAGES } from '../data/business';

const INFO = [
  { icon: 'fa-phone',          label: 'Telefono',   value: BUSINESS.phoneDisplay, href: BUSINESS.phoneTel },
  { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', value: 'Scrivi ora su WhatsApp', href: waLink(WA_MESSAGES.generic), external: true },
  { icon: 'fa-location-dot',   label: 'Sede',       value: BUSINESS.address },
  { icon: 'fa-map-location-dot', label: 'Area servita', value: BUSINESS.areas },
  { icon: 'fa-building',       label: 'Partita IVA', value: BUSINESS.piva },
];

const WA_OPTIONS = [
  {
    label: 'Preventivo trasloco',
    sub:   'Residenziale o aziendale',
    msg:   WA_MESSAGES.preventivo,
  },
  {
    label: 'Sopralluogo gratuito',
    sub:   'Valutiamo insieme il lavoro',
    msg:   WA_MESSAGES.sopralluogo,
  },
  {
    label: 'Info noleggio',
    sub:   'Furgoni e piattaforme aeree',
    msg:   WA_MESSAGES.noleggio,
  },
];

export default function Contatti() {
  return (
    <>
      <PageHero
        title="Contattaci"
        subtitle="Preventivo gratuito e senza impegno. Rispondiamo in pochi minuti su WhatsApp."
        bg="hero_section_1774377201779.png"
        breadcrumb="Contatti"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* ── INFO CARD ──────────────────────────────────── */}
            <Reveal direction="left">
              <div className="contact-info-card">
                <h3>Dove siamo</h3>
                <ul className="contact-info-list">
                  {INFO.map((item) => (
                    <li key={item.label} className="contact-info-item">
                      <div className="contact-info-icon">
                        <i className={`fa-solid ${item.icon}`} />
                      </div>
                      <div>
                        <p>{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span>{item.value}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* ── WA OPTIONS ─────────────────────────────────── */}
            <Reveal direction="right">
              <div className="wa-cta-box">
                <span className="eyebrow">Richiedi preventivo</span>
                <h3>Scrivi su WhatsApp</h3>
                <p>
                  Il modo più rapido per ottenere un preventivo gratuito: clicca su uno dei pulsanti
                  qui sotto per aprire WhatsApp con un messaggio già precompilato. Ti risponderemo
                  entro pochi minuti.
                </p>

                <div className="wa-options">
                  {WA_OPTIONS.map((o) => (
                    <a
                      key={o.label}
                      href={waLink(o.msg)}
                      className="wa-option-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="wa-option-icon">
                        <i className="fa-brands fa-whatsapp" />
                      </div>
                      <div className="wa-option-text">
                        <strong>{o.label}</strong>
                        <span>{o.sub}</span>
                      </div>
                      <i className="fa-solid fa-arrow-right wa-option-arrow" />
                    </a>
                  ))}
                </div>

                <p className="wa-note">
                  <i className="fa-solid fa-clock" />
                  Risposta garantita in pochi minuti. Per urgenze siamo disponibili H24.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <CtaBanner
        title="Preferisci chiamare?"
        subtitle="Siamo disponibili per parlare direttamente del tuo trasloco e rispondere a tutte le tue domande."
        waMsg={WA_MESSAGES.preventivo}
      />
    </>
  );
}
