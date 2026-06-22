import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const IconFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const IconPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CatLogo = () => (
  <img src="/logo-catcafeapi.png" alt="Logo do Black Cat & Coffee" />
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Coluna 1: Logo + tagline */}
        <div className={styles.col}>
          <Link to="/home" className={styles.logo}>
            <CatLogo />
          </Link>
        </div>

        {/* Coluna 2: Links */}
        <div className={styles.col}>
          <p className={styles.colTitle}>LINKS</p>
          <ul className={styles.linkList}>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/gatos">Gatos</Link></li>
            <li><Link to="/cardapio">Cardápio</Link></li>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Informações */}
        <div className={styles.col}>
          <p className={styles.colTitle}>INFORMAÇÕES</p>
          <div className={styles.info}>
            <p>Rua das Flores, 123<br />São Paulo, SP</p>
            <p>Seg – Sex: 10h às 20h<br />Sáb – Dom: 10h às 21h</p>
          </div>
        </div>

        {/* Coluna 4: Redes sociais */}
        <div className={styles.col}>
          <p className={styles.colTitle}>SIGA A GENTE</p>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href="#" className={styles.socialBtn} aria-label="Localização">
              <IconPin />
            </a>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© 2026 Black Cat &amp; Coffee. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}