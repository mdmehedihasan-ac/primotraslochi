import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CtaBanner from '../components/CtaBanner';

const IMAGES = [
  { src: null, ph: 'https://picsum.photos/seed/trasloco1/800/600',  alt: 'Imballaggio professionale mobili' },
  { src: null, ph: 'https://picsum.photos/seed/trasloco2/800/1000', alt: 'Lavorazione artigianale mobili' },
  { src: null, ph: 'https://picsum.photos/seed/trasloco3/800/600',  alt: 'Team Primo Traslochi al lavoro' },
  { src: null, ph: 'https://picsum.photos/seed/trasloco4/800/700',  alt: 'Trasloco ufficio aziendale' },
  { src: null, ph: 'https://picsum.photos/seed/trasloco5/800/600',  alt: 'Trasporto mobili sicuro' },
  { src: null, ph: 'https://picsum.photos/seed/trasloco6/800/900',  alt: 'Sgombero professionale' },
  { src: null, ph: 'https://picsum.photos/seed/trasloco7/800/600',  alt: 'Movimentazione elementi speciali' },
  { src: null, ph: 'https://picsum.photos/seed/trasloco8/800/700',  alt: 'Deposito mobili sicuro' },
  { src: null, ph: 'https://picsum.photos/seed/trasloco9/800/600',  alt: 'Noleggio furgone Pavia' },
  { src: null, ph: 'https://picsum.photos/seed/trasloco10/800/800', alt: 'Piattaforma aerea traslochi' },
  { src: null, ph: 'https://picsum.photos/seed/trasloco11/800/600', alt: 'Trasloco in corso Pavia' },
  { src: null, ph: 'https://picsum.photos/seed/trasloco12/800/700', alt: 'Primo Traslochi squadra' },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const close = useCallback(() => setLightboxIdx(null), []);

  const prev = useCallback(() =>
    setLightboxIdx(i => (i - 1 + IMAGES.length) % IMAGES.length), []);

  const next = useCallback(() =>
    setLightboxIdx(i => (i + 1) % IMAGES.length), []);

  useEffect(() => {
    if (lightboxIdx === null) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIdx, close, next, prev]);

  return (
    <>
      <PageHero
        title="I Nostri Lavori"
        subtitle="Alcune immagini dei traslochi e dei servizi che abbiamo realizzato."
        bg="gallery_carpentry_1774378335860.png"
        breadcrumb="Gallery"
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-header centered">
            <span className="eyebrow eyebrow-center">Gallery</span>
            <h2>Qualità che si vede</h2>
            <p>Ogni trasloco è trattato con cura artigianale. Clicca sulle immagini per ingrandirle.</p>
          </Reveal>

          <div className="gallery-masonry mt-lg">
            {IMAGES.map((img, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <div className="gallery-item" onClick={() => setLightboxIdx(i)}>
                  <img src={img.ph} alt={img.alt} loading="lazy" />
                  <div className="gallery-item-overlay">
                    <i className="fa-solid fa-magnifying-glass-plus" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button
              className="lightbox-close"
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Chiudi"
            >
              <i className="fa-solid fa-xmark" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Indietro"
              style={{
                position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                width: 48, height: 48, borderRadius: '50%',
                background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)',
                color: '#fff', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <i className="fa-solid fa-chevron-left" />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={lightboxIdx}
                src={IMAGES[lightboxIdx].ph}
                alt={IMAGES[lightboxIdx].alt}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.22 }}
              />
            </AnimatePresence>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Avanti"
              style={{
                position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                width: 48, height: 48, borderRadius: '50%',
                background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)',
                color: '#fff', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <i className="fa-solid fa-chevron-right" />
            </button>

            {/* Counter */}
            <div style={{
              position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,.5)', fontSize: '.85rem', letterSpacing: '.08em',
            }}>
              {lightboxIdx + 1} / {IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CtaBanner
        title="Vuoi un risultato come questi?"
        subtitle="Contattaci per un preventivo gratuito e scopri come possiamo aiutarti."
      />
    </>
  );
}
