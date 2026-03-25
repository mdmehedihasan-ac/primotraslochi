import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Counter from '../components/Counter';
import Reveal from '../components/Reveal';
import CtaBanner from '../components/CtaBanner';
import { BUSINESS, waLink, WA_MESSAGES } from '../data/business';

const TESTIMONIALS = [
  {
    text: 'Professionalità e cura eccezionale. Hanno smontato e rimontato tutti i mobili senza un graffio. Consiglio vivamente!',
    author: 'Marco R.',
    location: 'Pavia',
    initials: 'MR',
  },
  {
    text: 'Ho usato il servizio di deposito mobili per 3 mesi e tutto era perfetto. Prezzi onesti e personale sempre disponibile.',
    author: 'Silvia T.',
    location: 'Lodi',
    initials: 'ST',
  },
  {
    text: 'Trasloco aziendale gestito in modo impeccabile. Zero tempi morti, zero danni. Persone serie e competenti.',
    author: 'Andrea B.',
    location: 'Milano',
    initials: 'AB',
  },
];

const SERVICES = [
  {
    img: 'gallery_packing_1774378377610.png',
    title: 'Traslochi Residenziali',
    desc: 'Gestiamo ogni fase con cura: smontaggio, imballaggio professionale, trasporto sicuro e rimontaggio.',
    to: '/servizi',
  },
  {
    img: 'section_2_1774377203366.png',
    title: 'Traslochi Aziendali',
    desc: 'Uffici, biblioteche, archivi e centri dati. Pianificazione precisa per ridurre i tempi di inattività.',
    to: '/servizi',
  },
  {
    img: 'noleggio_section_1774377685114.png',
    title: 'Noleggio & Sgomberi',
    desc: 'Furgoni e piattaforme aeree a noleggio. Sgombero professionale di cantine, solai e magazzini.',
    to: '/noleggio',
  },
];

const FEATURES = [
  { icon: 'fa-hammer',        title: 'Falegnami di Mestiere', desc: 'Non semplici trasportatori: siamo artigiani del legno che conoscono ogni tipo di mobile fin dal 1990.' },
  { icon: 'fa-box-open',      title: 'Imballaggio Professionale', desc: 'Materiali specifici per ogni oggetto. Nessun mobile viene caricato senza essere adeguatamente protetto.' },
  { icon: 'fa-shield-halved', title: 'Assicurazione Inclusa', desc: 'Ogni servizio include copertura assicurativa. Traslochiamo con massima tranquillità per te.' },
  { icon: 'fa-headset',       title: 'Reperibilità H24',      desc: 'Traslochi urgenti? Siamo disponibili h24 per ogni necessità, senza farti aspettare.' },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('/images/hero_background_1774377667497.png')" }}
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="gold-dot" />
            Dal 1990 &mdash; Pavia &middot; Lodi &middot; Cremona &middot; Milano
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Il tuo trasloco,<br />
            <span className="text-gradient">in mani esperte.</span>
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Falegnami qualificati che trattano ogni mobile con la cura che merita. Preventivi gratuiti, copertura assicurativa, disponibilità H24.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.68 }}
          >
            <a href={BUSINESS.phoneTel} className="btn btn-gold btn-lg">
              <i className="fa-solid fa-phone" /> Chiama Ora
            </a>
            <a
              href={waLink(WA_MESSAGES.preventivo)}
              className="btn btn-outline-white btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp" /> Preventivo WhatsApp
            </a>
          </motion.div>

          <motion.div
            className="trust-strip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.55 }}
          >
            <span className="trust-badge"><i className="fa-solid fa-star" /> 35+ anni di esperienza</span>
            <span className="trust-badge"><i className="fa-solid fa-shield-halved" /> Copertura assicurativa</span>
            <span className="trust-badge wa-badge"><i className="fa-brands fa-whatsapp" /> Risposta in pochi minuti</span>
          </motion.div>
        </div>

        <div className="hero-scroll-hint">
          <span>Scorri</span>
          <i className="fa-solid fa-chevron-down" />
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number-wrap">
                <span className="stat-number"><Counter target={35} /></span>
                <span className="stat-suffix">+</span>
              </div>
              <span className="stat-label">Anni di Esperienza</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number-wrap">
                <span className="stat-number"><Counter target={4} /></span>
              </div>
              <span className="stat-label">Province Servite</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <i className="fa-solid fa-clock stat-icon" />
              <span className="stat-label">Reperibilità H24</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <i className="fa-solid fa-shield-halved stat-icon" />
              <span className="stat-label">Copertura Assicurativa</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHI SIAMO PREVIEW ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="split-grid">
            <Reveal direction="left" className="split-image">
              <img
                src="/images/chi_siamo_image_1774377823408.png"
                alt="Primo Traslochi — falegnami qualificati"
                loading="lazy"
              />
              <div className="split-badge">
                <strong>Dal</strong>
                <span>1990</span>
              </div>
            </Reveal>

            <Reveal direction="right" className="split-text">
              <span className="eyebrow">Chi Siamo</span>
              <h2>Artigiani del trasloco dal 1990</h2>
              <p>
                Primo Traslochi nasce a Pavia per iniziativa di <strong>4 falegnami</strong> con grande
                esperienza nella realizzazione di mobili. Non siamo semplici trasportatori: la nostra
                conoscenza profonda dei mobili ci permette di smontarli, imballarli e rimontarli alla
                perfezione.
              </p>
              <p>
                In oltre 35 anni abbiamo aiutato migliaia di famiglie e aziende nelle province di Pavia,
                Lodi, Cremona e Milano.
              </p>
              <ul className="check-list">
                <li><i className="fa-solid fa-check" /> Falegnami specializzati con 35+ anni di esperienza</li>
                <li><i className="fa-solid fa-check" /> Smontaggio e rimontaggio di ogni tipo di mobile</li>
                <li><i className="fa-solid fa-check" /> Copertura assicurativa inclusa su tutti i servizi</li>
              </ul>
              <NavLink to="/chi-siamo" className="btn btn-primary mt-md">
                Scopri la nostra storia
              </NavLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────────── */}
      <section className="section section-light">
        <div className="container">
          <Reveal className="section-header centered">
            <span className="eyebrow eyebrow-center">I Nostri Servizi</span>
            <h2>Soluzioni complete per ogni esigenza</h2>
            <p>Dal singolo mobile all'intera abitazione, dall'ufficio al magazzino. Gestiamo tutto.</p>
          </Reveal>

          <div className="cards-grid mt-lg">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} className="service-card">
                <div className="card-img-wrap">
                  <div className="card-img" style={{ backgroundImage: `url('/images/${s.img}')` }} />
                </div>
                <div className="card-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <NavLink to={s.to} className="card-link">
                    Scopri di più <i className="fa-solid fa-arrow-right" />
                  </NavLink>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-lg" style={{ textAlign: 'center' }}>
            <NavLink to="/servizi" className="btn btn-outline btn-lg">Vedi tutti i servizi</NavLink>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="section section-off">
        <div className="container">
          <Reveal className="section-header centered">
            <span className="eyebrow eyebrow-center">Recensioni</span>
            <h2>Cosa dicono i nostri clienti</h2>
            <p>Migliaia di famiglie e aziende ci hanno scelto in 35 anni. Ecco alcune testimonianze.</p>
          </Reveal>

          <div className="testimonials-grid mt-lg">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.12}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div className="testimonial-author-info">
                      <strong>{t.author}</strong>
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES (dark) ──────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <Reveal className="section-header centered">
            <span className="eyebrow eyebrow-gold eyebrow-center">Perché Sceglierci</span>
            <h2>I nostri punti di forza</h2>
            <p>Cosa ci distingue da tutti gli altri traslocatori.</p>
          </Reveal>

          <div className="features-grid mt-lg">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="feature-item">
                  <div className="feature-icon"><i className={`fa-solid ${f.icon}`} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CtaBanner
        title="Preventivo gratuito e senza impegno"
        subtitle="Contattaci oggi. Valutiamo le tue esigenze e ti offriamo la soluzione migliore."
        waMsg={WA_MESSAGES.preventivo}
      />
    </>
  );
}
