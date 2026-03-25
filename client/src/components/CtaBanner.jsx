import { BUSINESS, waLink, WA_MESSAGES } from '../data/business';
import Reveal from './Reveal';

export default function CtaBanner({ title, subtitle, waMsg }) {
  return (
    <section className="cta-banner">
      <div className="container">
        <Reveal>
          <div className="cta-inner">
            <div className="cta-text">
              <h2>{title}</h2>
              {subtitle && <p>{subtitle}</p>}
            </div>
            <div className="cta-actions">
              <a href={BUSINESS.phoneTel} className="btn btn-white btn-lg">
                <i className="fa-solid fa-phone" /> {BUSINESS.phoneDisplay}
              </a>
              <a
                href={waLink(waMsg ?? WA_MESSAGES.preventivo)}
                className="btn btn-wa btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp" /> Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
