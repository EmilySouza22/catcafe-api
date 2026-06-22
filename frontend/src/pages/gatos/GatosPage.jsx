import styles from './GatosPage.module.css';

function IconMale() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="14" r="5"/>
      <line x1="19" y1="5" x2="14.14" y2="9.86"/>
      <polyline points="15 5 19 5 19 9"/>
    </svg>
  );
}

function IconFemale() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6"/>
      <line x1="12" y1="15" x2="12" y2="21"/>
      <line x1="9" y1="19" x2="15" y2="19"/>
    </svg>
  );
}

function IconVaccine() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3l6 0M12 3v4M8 21h8M12 7c-2.8 0-5 2.2-5 5v4h10v-4c0-2.8-2.2-5-5-5z"/>
    </svg>
  );
}

function IconCastrated() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  );
}

function IconFIV() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

const CATS = [
  {
    id: 1,
    name: 'Luna',
    gender: 'f',
    age: '2 anos',
    vaccinated: true,
    castrated: true,
    fivFelv: 'Negativo',
    personality: ['Tranquila', 'Carinhosa', 'Observadora'],
    description: 'Luna é uma gata serena que adora observar o mundo do alto. Ela escolhe com cuidado em quem confiar, mas quando te adota de verdade, nunca mais larga.',
    image: '/luna_photo.png',
  },
  {
    id: 2,
    name: 'Salem',
    gender: 'm',
    age: '1 ano',
    vaccinated: true,
    castrated: true,
    fivFelv: 'Negativo',
    personality: ['Brincalhão', 'Curioso', 'Energético'],
    description: 'Salem chegou pequeninho e já dominou o espaço. Ama brincar, investigar cada canto e te acordar às 6h da manhã com muito amor (e barulho).',
    image: '/salem_photo.png',
  },
  {
    id: 3,
    name: 'Nox',
    gender: 'm',
    age: '3 anos',
    vaccinated: true,
    castrated: true,
    fivFelv: 'Negativo',
    personality: ['Independente', 'Gentil', 'Companheiro'],
    description: 'Nox é o tipo de gato que fica do seu lado sem pedir atenção o tempo todo. Discreto, mas sempre presente — aparece exatamente quando você precisa.',
    image: '/nox_photo.png',
  },
  {
    id: 4,
    name: 'Pandora',
    gender: 'f',
    age: '2 anos',
    vaccinated: true,
    castrated: true,
    fivFelv: 'Positivo',
    personality: ['Dócil', 'Corajosa', 'Afetiva'],
    description: 'Pandora vive com FIV/FELV positivo, mas isso não diminui nem um pouco seu amor pela vida. Ela precisa de um lar tranquilo e te dará amor incondicional em troca.',
    image: '/pandora_photo.png',
  },
  {
    id: 5,
    name: 'Mochi',
    gender: 'f',
    age: '6 meses',
    vaccinated: true,
    castrated: false,
    fivFelv: 'Negativo',
    personality: ['Agitada', 'Sociável', 'Travessa'],
    description: 'Mochi ainda está descobrindo o mundo e quer fazer isso do seu lado. Filhote cheia de energia, perfeita para quem quer crescer junto com ela.',
    image: '/mochi_photo.png',
  },
  {
    id: 6,
    name: 'Bruxo',
    gender: 'm',
    age: '4 anos',
    vaccinated: true,
    castrated: true,
    fivFelv: 'Negativo',
    personality: ['Reservado', 'Leal', 'Calmo'],
    description: 'Bruxo parece sério à primeira vista, mas quem conquista sua confiança ganha um amigo para a vida inteira. Ama silêncio, cobertor e uma boa tarde de domingo.',
    image: '/bruxo_photo.png',
  },
];

export default function GatosPage() {
  return (
    <div className={styles.page}>

      {/* HEADER */}
      <section className={styles.header}>
        <div className={styles.container}>
          <span className={styles.label}>Gatinhos</span>
          <h1 className={styles.title}>Conheça nossos gatos!</h1>
          <p className={styles.subtitle}>
            Cada um com sua própria história e jeito de amar.
            Encontre aquele que combina com você.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {CATS.map((cat) => (
              <div key={cat.id} className={styles.card}>

                <div className={styles.cardImage}>
                  {/* src="/nome-do-gato.jpg" quando tiver a imagem */}
                  <img src={cat.image} alt={cat.name} />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <div className={styles.nameRow}>
                      <span className={styles.name}>{cat.name}</span>
                      <span className={styles.gender}>
                        {cat.gender === 'f' ? <IconFemale /> : <IconMale />}
                      </span>
                    </div>
                    <span className={styles.age}>{cat.age}</span>
                  </div>

                  <p className={styles.description}>{cat.description}</p>

                  <div className={styles.traits}>
                    {cat.personality.map((trait) => (
                      <span key={trait} className={styles.trait}>{trait}</span>
                    ))}
                  </div>

                  <div className={styles.divider} />

                  <div className={styles.tags}>
                    {cat.vaccinated && (
                      <span className={styles.tag}>
                        <IconVaccine /> Vacinado
                      </span>
                    )}
                    {cat.castrated && (
                      <span className={styles.tag}>
                        <IconCastrated /> Castrado
                      </span>
                    )}
                    <span className={styles.tag}>
                      <IconFIV /> FIV/FELV: {cat.fivFelv}
                    </span>
                  </div>

                  <a href={`/adocao`} className={styles.btn}>
                    Quero adotar <IconArrow />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}