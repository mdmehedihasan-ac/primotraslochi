import { NavLink } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CtaBanner from '../components/CtaBanner';
import { WA_MESSAGES } from '../data/business';

const MAIN_SERVICES = [
  {
    img: 'gallery_packing_1774378377610.png',
    title: 'Traslochi Residenziali',
    desc: 'Il trasloco di casa è un momento delicato. Gestiamo ogni fase: smontaggio mobili, imballaggio accurato, trasporto in totale sicurezza e rimontaggio nella nuova abitazione.',
    desc2: 'Anche per il trasloco di un solo mobile o di una singola stanza. Preventivo gratuito.',
  },
  {
    img: 'section_2_1774377203366.png',
    title: 'Traslochi Aziendali',
    desc: 'Movimentazione di uffici, biblioteche, archivi e centri elaborazione dati. Pianificazione accurata per ridurre al minimo i tempi di fermo operativo.',
    desc2: 'Montaggio e smontaggio di arredi ufficio, gestione cavi e attrezzature informatiche in totale sicurezza.',
  },
  {
    img: 'section_5_1774377219279.png',
    title: 'Movimentazioni Speciali',
    desc: 'Pianoforti, biliardi, casseforti, oggetti d\'arte e arredi particolarmente voluminosi o pesanti. Disponiamo di attrezzature specifiche e personale specializzato.',
    desc2: 'Anche modifiche e adattamenti per il passaggio di mobili in spazi difficili.',
  },
  {
    img: 'section_6_7_1774377220701.png',
    title: 'Sgomberi',
    desc: 'Sgombero professionale di cantine, solai, garage, magazzini e depositi. Gestiamo lo smaltimento e il trasporto di tutto il materiale.',
    desc2: 'Servizio rapido e completo, con stima del lavoro sul posto. Disponibili nelle province di Pavia, Lodi, Cremona e Milano.',
  },
];

const CHECKLIST = [
  { icon: 'fa-box',              label: 'Fornitura materiale da imballaggio' },
  { icon: 'fa-screwdriver-wrench', label: 'Smontaggio e montaggio mobili' },
  { icon: 'fa-tape',             label: 'Imballaggio professionale effetti personali' },
  { icon: 'fa-truck',            label: 'Trasporto mobili ed effetti personali' },
  { icon: 'fa-music',            label: 'Movimentazione pianoforti e biliardi' },
  { icon: 'fa-arrows-up-down-left-right', label: 'Modifiche e adattamenti arredi' },
  { icon: 'fa-book',             label: 'Movimentazione biblioteche e archivi' },
  { icon: 'fa-server',           label: 'Centri elaborazione dati' },
  { icon: 'fa-broom',            label: 'Sgombero cantine, garage e solai' },
  { icon: 'fa-shield-halved',    label: 'Copertura assicurativa su tutti i servizi' },
  { icon: 'fa-clock',            label: 'Reperibilità H24 su traslochi urgenti' },
  { icon: 'fa-warehouse',        label: 'Servizio di deposito mobili' },
];

export default function Servizi() {
  return (
    <>
      <PageHero
        title="I Nostri Servizi"
        subtitle="Soluzioni complete per ogni tipo di trasloco, dalla singola stanza all'azienda intera."
        bg="section_4_1774377206324.png"
        breadcrumb="Servizi"
      />

      {/* ── MAIN SERVICES ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Quello che facciamo</span>
            <h2>Traslochi su misura per te</h2>
            <p>Eseguiamo piccoli e grandi traslochi, anche di un solo mobile. Preventivi gratuiti e senza impegno.</p>
          </Reveal>

          <div className="services-full-grid mt-lg">
            {MAIN_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.1}>
                <div className="service-full-card">
                  <div className="card-img" style={{ backgroundImage: `url('/images/${s.img}')` }} />
                  <div className="card-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <p>{s.desc2}</p>
                    <NavLink to="/contatti" className="btn btn-primary mt-sm">
                      Richiedi preventivo
                    </NavLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHECKLIST ────────────────────────────────────────── */}
      <section className="section section-light">
        <div className="container">
          <Reveal className="section-header centered">
            <span className="eyebrow eyebrow-center">Nel dettaglio</span>
            <h2>Tutti i nostri servizi</h2>
            <p>Una lista completa di tutto quello che possiamo fare per te.</p>
          </Reveal>

          <div className="services-checklist mt-lg">
            {CHECKLIST.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.04}>
                <div className="srv-check">
                  <i className={`fa-solid ${c.icon}`} />
                  {c.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Qual è il tuo trasloco?"
        subtitle="Contattaci per un preventivo gratuito: valutiamo insieme le tue esigenze."
        waMsg={WA_MESSAGES.preventivo}
      />
    </>
  );
}
