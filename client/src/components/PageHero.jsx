import { NavLink } from 'react-router-dom';

/**
 * Reusable sub-page hero.
 * @param {string} title
 * @param {string} subtitle
 * @param {string} bg   — image filename from /images/
 * @param {string} breadcrumb — label for current page
 */
export default function PageHero({ title, subtitle, bg, breadcrumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: `url('/images/${bg}')` }} />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <div className="breadcrumb">
          <NavLink to="/">Home</NavLink>
          <span className="sep">/</span>
          <span>{breadcrumb}</span>
        </div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
