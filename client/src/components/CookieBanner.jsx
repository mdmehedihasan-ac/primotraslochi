import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieChoice')) setVisible(true);
  }, []);

  const dismiss = (choice) => {
    localStorage.setItem('cookieChoice', choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="cookie-bar"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '110%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cookie-inner">
            <p>
              Utilizziamo i cookie per offrirti la migliore esperienza.{' '}
              <a href="https://www.primotraslochi2.it/Privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </p>
            <div className="cookie-btns">
              <button className="btn btn-gold btn-sm" onClick={() => dismiss('ok')}>Accetta</button>
              <button className="btn btn-ghost btn-sm" onClick={() => dismiss('no')}>Rifiuta</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
