import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CtaBanner from '../components/CtaBanner';
import { waLink, WA_MESSAGES } from '../data/business';

const OPTIONS = [
  {
    img: 'noleggio_section_1774377685114.png',
    title: 'Noleggio Furgone',
    desc: 'Furgoni coperti di diverse dimensioni, ideali per traslochi fai-da-te, piccoli spostamenti, consegne o acquisti ingombranti.',
    desc2: 'Disponibili con o senza guidatore: scegli la formula più comoda.',
    waMsg: WA_MESSAGES.furgone,
  },
  {
    img: 'section_8_9_footer_1774377222171.png',
    title: 'Piattaforma Aerea',
    desc: 'La piattaforma aerea è indispensabile quando scale e ascensori non bastano: per traslochi ai piani alti o per alzare mobili voluminosi da finestre e balconi.',
    desc2: 'Operata sempre da personale qualificato. Disponibile su prenotazione.',
    waMsg: WA_MESSAGES.piattaforma,
  },
];

export default function Noleggio() {
  return (
    <>
      <PageHero
        title="Noleggio Mezzi"
        subtitle="Furgoni e piattaforme aeree disponibili con o senza operatore."
        bg="noleggio_section_1774377685114.png"
        breadcrumb="Noleggio"
      />

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="split-grid">
            <Reveal direction="left" className="split-image">
              <img
                src="/images/noleggio_section_1774377685114.png"
                alt="Noleggio furgone Primo Traslochi Pavia"
                loading="lazy"
              />
            </Reveal>

            <Reveal direction="right" className="split-text">
              <span className="eyebrow">Noleggio</span>
              <h2>Fai-da-te o con operatore</h2>
              <p>
                Preferisci gestire il trasloco in autonomia? Mettiamo a disposizione furgoni di varie
                dimensioni, perfetti per piccoli spostamenti o per chi vuole organizzarsi in proprio.
              </p>
              <p>
                Hai bisogno di alzare mobili al piano alto o raggiungere spazi sopraelevati? La nostra
                piattaforma aerea è la soluzione giusta.
              </p>
              <ul className="check-list mt-sm">
                <li><i className="fa-solid fa-check" /> Furgoni di diverse dimensioni disponibili</li>
                <li><i className="fa-solid fa-check" /> Piattaforma aerea per ogni tipo di edificio</li>
                <li><i className="fa-solid fa-check" /> Noleggio con o senza operatore</li>
                <li><i className="fa-solid fa-check" /> Disponibili in 4 province: Pavia, Lodi, Cremona, Milano</li>
              </ul>
              <a
                href={waLink(WA_MESSAGES.noleggio)}
                className="btn btn-wa mt-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp" /> Richiedi info noleggio
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── OPTIONS ──────────────────────────────────────────── */}
      <section className="section section-light">
        <div className="container">
          <Reveal className="section-header centered">
            <span className="eyebrow eyebrow-center">Le nostre opzioni</span>
            <h2>Cosa puoi noleggiare</h2>
            <p>Scegli il mezzo più adatto alle tue esigenze.</p>
          </Reveal>

          <div className="noleggio-options mt-lg">
            {OPTIONS.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.1}>
                <div className="noleggio-card">
                  <div className="card-img-wrap">
                    <div className="card-img" style={{ backgroundImage: `url('/images/${o.img}')` }} />
                  </div>
                  <div className="card-body">
                    <h3>{o.title}</h3>
                    <p>{o.desc}</p>
                    <p>{o.desc2}</p>
                    <a
                      href={waLink(o.waMsg)}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-whatsapp" /> Richiedi disponibilità
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Tariffe personalizzate"
        subtitle="Contattaci per conoscere disponibilità e prezzi: ogni noleggio viene valutato in base alle tue esigenze."
        waMsg={WA_MESSAGES.noleggio}
      />
    </>
  );
}
