import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const CatLogo = () => (
  <img src="/logo-catcafeapi.png" alt="Logo do Black Cat & Coffee" />
);

const NAV_LINKS = [
  { to: '/sobre',    label: 'SOBRE' },
  { to: '/gatos',   label: 'GATOS' },
  { to: '/cardapio', label: 'CARDÁPIO' },
  { to: '/eventos', label: 'EVENTOS' },
  { to: '/contato', label: 'CONTATO' },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        {/* Logo */}
        <Link to="/home" className={styles.logo}>
          <CatLogo />
        </Link>

        {/* Links centro */}
        <ul className={styles.links}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Ícones sociais + menu */}
        <div className={styles.actions}>
          <button className={styles.menuBtn} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>

      </nav>
    </header>
  );
}