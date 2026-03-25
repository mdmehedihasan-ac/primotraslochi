import { motion } from 'framer-motion';
import { waLink, WA_MESSAGES } from '../data/business';

export default function WaFloat() {
  return (
    <motion.a
      href={waLink(WA_MESSAGES.generic)}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Contattaci su WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fa-brands fa-whatsapp" />
    </motion.a>
  );
}
