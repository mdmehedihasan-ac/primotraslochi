import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CtaBanner from '../components/CtaBanner';
import { NavLink } from 'react-router-dom';
import { WA_MESSAGES } from '../data/business';

const VALUES = [
  { icon: 'fa-handshake', title: 'Fiducia',       desc: 'Rapporti duraturi con i clienti, basati sulla trasparenza e l\'onestà in ogni fase del lavoro.' },
  { icon: 'fa-hammer',    title: 'Artigianalità', desc: 'Ogni trasloco è un lavoro artigianale: ogni mobile trattato con la cura che merita, non come un semplice pacco.' },
  { icon: 'fa-star',      title: 'Qualità',       desc: 'Dal materiale da imballaggio alla cura nel trasporto: il massimo standard di qualità sempre.' },
  { icon: 'fa-clock',     title: 'Puntualità',    desc: 'Rispettiamo i tempi e gli accordi presi. Un trasloco è un momento delicato che richiede precisione.' },
];

const TIMELINE = [
  { year: '1990', title: 'Fondazione',              desc: '4 falegnami pavesi fondano Primo Traslochi con un\'idea semplice: fare traslochi con la cura di chi costruisce mobili.' },
  { year: '2000', title: 'Espansione',              desc: 'Il servizio si estende alle province di Lodi, Cremona e Milano. Nuovi veicoli per rispondere alla crescente domanda.' },
  { year: '2015', title: 'Noleggio & Speciali',    desc: 'Introduzione del noleggio furgoni e piattaforme aeree, oltre alla movimentazione di pianoforti e oggetti speciali.' },
  { year: 'Oggi', title: '35+ Anni di Eccellenza', desc: 'Continuiamo a offrire lo stesso servizio artigianale, con l\'esperienza accumulata in oltre tre decenni.' },
];

export default function ChiSiamo() {
  return (
    <>
      <PageHero
        title="Chi Siamo"
        subtitle="La storia di un'impresa nata dall'amore per il legno e per il lavoro ben fatto."
        bg="hero_moving_1774378225977.png"
        breadcrumb="Chi Siamo"
      />

      {/* ── STORIA ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="split-grid">
            <Reveal direction="left" className="split-image">
              <img
                src="/images/chi_siamo_image_1774377823408.png"
                alt="Falegnami Primo Traslochi al lavoro"
                loading="lazy"
              />
              <div className="split-badge">
                <strong>Dal</strong>
                <span>1990</span>
              </div>
            </Reveal>

            <Reveal direction="right" className="split-text">
              <span className="eyebrow">La Nostra Storia</span>
              <h2>Dall'amore per il legno, un'impresa di fiducia</h2>
              <p>
                Primo Traslochi di Pavia è un'impresa nata nel <strong>1990</strong> per iniziativa di
                4 falegnami con grande e lunga esperienza nella realizzazione di mobili.
              </p>
              <p>
                L'idea fu legata alla richiesta di molti clienti che si lamentavano per i danni causati
                da alcuni traslocatori e sollecitavano nostri interventi di riparazione. Abbiamo quindi
                deciso di creare un'impresa di traslochi in grado di garantire un{' '}
                <strong>servizio curato nei minimi particolari</strong>, con professionalità e precisione.
              </p>
              <p>
                In oltre 35 anni di attività, abbiamo aiutato migliaia di famiglie e aziende nelle
                province di Pavia, Lodi, Cremona e Milano, sempre con la stessa dedizione artigianale.
              </p>
              <NavLink to="/contatti" className="btn btn-primary mt-md">
                Richiedi un preventivo
              </NavLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VALORI ───────────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <Reveal className="section-header centered">
            <span className="eyebrow eyebrow-gold eyebrow-center">I Nostri Valori</span>
            <h2>Ciò che ci guida ogni giorno</h2>
            <p>Quattro principi fondamentali che definiscono il nostro modo di lavorare.</p>
          </Reveal>

          <div className="values-grid">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} style={{ height: '100%' }}>
                <div className="value-card">
                  <div className="value-icon"><i className={`fa-solid ${v.icon}`} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESPERIENZA + TIMELINE ─────────────────────────────── */}
      <section className="section section-off">
        <div className="container">
          <div className="split-grid reverse">
            <Reveal direction="left" className="split-text">
              <span className="eyebrow">La Nostra Esperienza</span>
              <h2>35 anni di traslochi eccellenti</h2>
              <p>
                Da piccoli traslochi di un solo mobile a trasferimenti aziendali complessi: nel corso
                degli anni abbiamo acquisito competenze uniche che ci permettono di affrontare qualsiasi
                situazione.
              </p>
              <div className="timeline mt-md">
                {TIMELINE.map((t) => (
                  <div key={t.year} className="timeline-item">
                    <div className="timeline-dot">{t.year}</div>
                    <div className="timeline-content">
                      <h4>{t.title}</h4>
                      <p>{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" className="split-image">
              <img
                src="/images/gallery_carpentry_1774378335860.png"
                alt="Lavoro artigianale Primo Traslochi"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Affidati a chi lo fa dal 1990"
        subtitle="Contattaci per un sopralluogo gratuito o un preventivo senza impegno."
        waMsg={WA_MESSAGES.sopralluogo}
      />
    </>
  );
}
