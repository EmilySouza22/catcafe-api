import styles from "./AdocaoPage.module.css";

// Ícones SVG inline
function IconForm() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="3" width="20" height="26" rx="2" />
      <line x1="11" y1="10" x2="21" y2="10" />
      <line x1="11" y1="15" x2="21" y2="15" />
      <line x1="11" y1="20" x2="17" y2="20" />
      <path d="M19 19l2 2 4-4" strokeWidth="1.8" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 27S4 19.5 4 11.5A7 7 0 0 1 16 7.9 7 7 0 0 1 28 11.5C28 19.5 16 27 16 27z" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13L16 4l11 9" />
      <rect x="10" y="18" width="12" height="10" rx="1" />
      <path d="M13 28v-6h6v6" />
      <path d="M20 13a4 4 0 0 1-8 0" strokeDasharray="2 2" />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="8.5" strokeWidth="2.5" />
      <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  );
}

function IconVaccine() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 3l6 0M12 3v4M8 21h8M12 7c-2.8 0-5 2.2-5 5v4h10v-4c0-2.8-2.2-5-5-5z" />
    </svg>
  );
}

function IconCastrated() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconFIV() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconMale() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="14" r="5" />
      <line x1="19" y1="5" x2="14.14" y2="9.86" />
      <polyline points="15 5 19 5 19 9" />
    </svg>
  );
}

function IconFemale() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="9" r="6" />
      <line x1="12" y1="15" x2="12" y2="21" />
      <line x1="9" y1="19" x2="15" y2="19" />
    </svg>
  );
}

const CATS = [
  {
    id: 1,
    name: "Luna",
    gender: "f",
    age: "2 anos",
    vaccinated: true,
    castrated: true,
    fivFelv: "Negativo",
    image: "",
  },
  {
    id: 2,
    name: "Salem",
    gender: "m",
    age: "1 ano",
    vaccinated: true,
    castrated: true,
    fivFelv: "Negativo",
    image: "",
  },
  {
    id: 3,
    name: "Nox",
    gender: "m",
    age: "3 anos",
    vaccinated: true,
    castrated: true,
    fivFelv: "Negativo",
    image: "",
  },
  {
    id: 4,
    name: "Pandora",
    gender: "f",
    age: "2 anos",
    vaccinated: true,
    castrated: true,
    fivFelv: "Positivo",
    image: "",
  },
];

const STEPS = [
  {
    icon: <IconForm />,
    label: "01.",
    title: "Preencha o formulário",
    desc: "Conte um pouco sobre você e o lar que pode oferecer.",
  },
  {
    icon: <IconHeart />,
    label: "02.",
    title: "Entrevista e visita",
    desc: "Entraremos em contato para conversar e, se necessário, agendaremos uma visita.",
  },
  {
    icon: <IconHome />,
    label: "03.",
    title: "Adoção responsável",
    desc: "Combinando tudo, seu novo amigo irá para um lar cheio de amor.",
  },
];

export default function AdocaoPage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <img
          src="/banner_adocao.png"
          alt="Adoção — Black Cat & Coffee"
          className={styles.heroBanner}
        />
      </section>

      {/* COMO FUNCIONA */}
      <section className={styles.howSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Como funciona a adoção</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.label} className={styles.stepCard}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <span className={styles.stepNumber}>{step.label}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFORMAÇÕES IMPORTANTES */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoBox}>
            <div className={styles.infoHeader}>
              <IconInfo />
              <span className={styles.infoTitle}>Informações importantes</span>
            </div>
            <div className={styles.infoGrid}>
              <p>
                As pessoas interessadas em adotar um gatinho terão que pagar uma
                taxa de R$100 para ajudar no custeio das vacinas e castração.
              </p>
              <p>
                A entrada e saída dos gatinhos será sempre pela porta lateral do
                gatil e somente poderão ser feitas em caixa de transporte.
              </p>
              <p>
                As pessoas interessadas em adotar algum gato terão que preencher
                um formulário e aguardar o contato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GATINHOS PARA ADOÇÃO */}
      <section className={styles.catsSection} id="gatinhos">
        <div className={styles.container}>
          <div className={styles.catsSectionHeader}>
            <h2 className={styles.catsSectionTitle}>Gatinhos para adoção</h2>
            <a href="/gatos" className={styles.verTodos}>
              Ver todos <IconArrow />
            </a>
          </div>
          <div className={styles.catsGrid}>
            {CATS.map((cat) => (
              <div key={cat.id} className={styles.catCard}>
                <div className={styles.catImage}>
                  {/* Substitua pelo caminho real, ex: src={`/${cat.name.toLowerCase()}.jpg`} */}
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className={styles.catInfo}>
                  <div className={styles.catNameRow}>
                    <span className={styles.catName}>{cat.name}</span>
                    <span className={styles.catGender}>
                      {cat.gender === "f" ? <IconFemale /> : <IconMale />}
                    </span>
                  </div>
                  <span className={styles.catAge}>{cat.age}</span>
                  <div className={styles.catTags}>
                    {cat.vaccinated && (
                      <span className={styles.catTag}>
                        <IconVaccine /> Vacinada
                      </span>
                    )}
                    {cat.castrated && (
                      <span className={styles.catTag}>
                        <IconCastrated /> Castrada
                      </span>
                    )}
                  </div>
                  <span className={styles.catFiv}>
                    <IconFIV /> FIV/FELV: {cat.fivFelv}
                  </span>
                  <div className={styles.catDivider} />
                  <a href="#" className={styles.catBtn}>
                    Conhecer <IconArrow />
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
