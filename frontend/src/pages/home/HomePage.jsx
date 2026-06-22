import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const IMG = {
  banner: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=900&q=80',
};

const IconCup = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8 C18 6 20 5 20 7" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M22 6 C22 4 24 3 24 5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M12 14 H32 L30 32 H14 L12 14 Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M32 18 C36 18 38 20 38 23 C38 26 36 28 32 28" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M10 36 H34" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="10" width="30" height="28" rx="3" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
    <path d="M7 18 H37" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M15 7 V13" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M29 7 V13" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="14" cy="25" r="1.5" fill="#1A1A1A"/>
    <circle cx="22" cy="25" r="1.5" fill="#1A1A1A"/>
    <circle cx="30" cy="25" r="1.5" fill="#1A1A1A"/>
    <circle cx="14" cy="32" r="1.5" fill="#1A1A1A"/>
    <circle cx="22" cy="32" r="1.5" fill="#1A1A1A"/>
  </svg>
);

const IconHeart = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 36 C22 36 7 26 7 17 C7 12 11 9 15.5 9 C18.5 9 21 11 22 12.5 C23 11 25.5 9 28.5 9 C33 9 37 12 37 17 C37 26 22 36 22 36 Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const CARDS = [
  { Icon: IconCup,      title: 'GATOS',             desc: 'Nossos moradores esperam por você.',               to: '/gatos' },
  { Icon: IconCup,      title: 'CARDÁPIO',           desc: 'Cafés especiais, salgados e doces irresistíveis.', to: '/cardapio' },
  { Icon: IconCalendar, title: 'EVENTOS',            desc: 'Encontros temáticos e experiências exclusivas.',   to: '/eventos' },
  { Icon: IconHeart,    title: 'ADOÇÃO RESPONSÁVEL', desc: 'Apoie essa causa e transforme vidas.',             to: '/adocao' },
];

export default function HomePage() {
  return (
    <main className={styles.page}>

      {/* ── HERO: imagem completa ── */}
      <section className={styles.hero}>
        <img src="/banner_home.png" alt="Café, gatos e boas histórias" className={styles.heroImg} />
      </section>

      {/* ── SOBRE NÓS ── */}
      <section className={styles.sobre}>
        <div className={styles.sobreImgWrap}>
          <img src="/imagem_ambiente_home.png" alt="Interior do Black Cat & Coffee" />
        </div>
        <div className={styles.sobreContent}>
          <p className={styles.eyebrow}>SOBRE NÓS</p>
          <h2 className={styles.sobreHeading}>
            Um lugar feito<br />
            para humanos<br />
            e gatinhos.
          </h2>
          <p className={styles.sobreDesc}>
            Mais que um café, somos um espaço de conexão, carinho e boas experiências ao lado dos nossos moradores.
          </p>
          <Link to="/sobre" className={styles.linkArrow}>SAIBA MAIS →</Link>
        </div>
      </section>

      {/* ── 4 CARDS DE DESTAQUE ── */}
      <section className={styles.cards}>
        {CARDS.map((card) => (
          <Link to={card.to} key={card.title} className={styles.card}>
            <card.Icon />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.desc}</p>
          </Link>
        ))}
      </section>

      {/* BANNER VENHA_NOS_VISITAR */}
      <section className={styles.bannerWrap}>
          <div className={styles.bannerPhoto}>
            <Link to="/contato" className={styles.linkArrow}>
              <img src="/image_experience_catcafe.png" alt="Gato preto deitado olhando para a tela" />
            </Link>
          </div>
      </section>

    </main>
  );
}