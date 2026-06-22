import { useState } from "react";
import styles from "./CardapioPage.module.css";

const MENU = {
  cafes: {
    label: "Cafés",
    descricao: "Grãos selecionados e preparos especiais para verdadeiros apreciadores.",
    itens: [
      { nome: "Espresso",   preco: "R$ 8,00",  img: "/image_expresso.png",  desc: "Clássico e encorpado. Feito com nosso blend exclusivo." },
      { nome: "Cappuccino", preco: "R$ 12,00", img: "/image_capuccino.png", desc: "Leve e cremoso, com espresso, leite vaporizado e toque de cacau." },
      { nome: "Cold Brew",  preco: "R$ 14,00", img: "/image_cold_brew.png", desc: "Extração a frio que resulta em um café leve, suave e refrescante." },
      { nome: "Latte",      preco: "R$ 13,00", img: "/image_latte.png",     desc: "Espresso com leite vaporizado. Suave, cremoso e reconfortante." },
    ],
  bebidas: {
    label: "Bebidas",
    descricao: "Refrescantes e saborosas, para qualquer hora do dia.",
    itens: [
      { nome: "Suco de Laranja",    preco: "R$ 10,00", img: "", desc: "Suco natural espremido na hora, fresquinho." },
      { nome: "Limonada Suíça",     preco: "R$ 12,00", img: "", desc: "Cremosa e refrescante, com leite condensado." },
      { nome: "Chá Gelado",         preco: "R$ 9,00",  img: "", desc: "Chá preto ou verde gelado com hortelã." },
      { nome: "Água de Coco",       preco: "R$ 8,00",  img: "", desc: "Natural e hidratante, direto da caixinha." },
      { nome: "Smoothie de Frutas", preco: "R$ 14,00", img: "", desc: "Blend de frutas da estação batidas na hora." },
      { nome: "Chocolate Quente",   preco: "R$ 13,00", img: "", desc: "Cremoso e rico, feito com chocolate belga." },
    ],
  },
  salgados: {
    label: "Salgados",
    descricao: "Opções quentinhas e saborosas para acompanhar seu café.",
    itens: [
      { nome: "Pão de Queijo Recheado", preco: "R$ 14,00", img: "", desc: "Recheado com muçarela de búfala e tomate seco." },
      { nome: "Croissant de Presunto",  preco: "R$ 16,00", img: "", desc: "Crocante por fora, macio por dentro, com presunto e queijo." },
      { nome: "Quiche de Espinafre",    preco: "R$ 18,00", img: "", desc: "Massa crocante com recheio cremoso de espinafre e ricota." },
      { nome: "Mini Wrap de Frango",    preco: "R$ 17,00", img: "", desc: "Frango grelhado, alface, tomate e molho especial." },
      { nome: "Torrada Caprese",        preco: "R$ 15,00", img: "", desc: "Tomate, muçarela fresca e manjericão sobre pão artesanal." },
      { nome: "Empada de Palmito",      preco: "R$ 10,00", img: "", desc: "Massa amanteigada com recheio de palmito temperado." },
    ],
  },
  doces: {
    label: "Doces",
    descricao: "Sobremesas irresistíveis para adoçar o seu dia.",
    itens: [
      { nome: "Brownie com Nozes",    preco: "R$ 16,00", img: "", desc: "Feito com chocolate belga e nozes caramelizadas." },
      { nome: "Cheesecake de Frutas", preco: "R$ 18,00", img: "", desc: "Cremoso e leve, com calda de frutas vermelhas." },
      { nome: "Muffin de Blueberry",  preco: "R$ 12,00", img: "", desc: "Fofinho, com mirtilos frescos em cada mordida." },
      { nome: "Cookie de Chocolate",  preco: "R$ 10,00", img: "", desc: "Crocante por fora, macio por dentro. Irresistível." },
      { nome: "Torta de Limão",       preco: "R$ 17,00", img: "", desc: "Massa crocante, creme de limão e merengue tostado." },
      { nome: "Cinnamon Roll",        preco: "R$ 14,00", img: "", desc: "Enrollado de canela com cobertura de cream cheese." },
    ],
  },
  veganos: {
    label: "Veganos",
    descricao: "Opções 100% plant-based, deliciosas e conscientes.",
    itens: [
      { nome: "Açaí com Frutas",    preco: "R$ 16,00", img: "", desc: "Açaí puro com frutas frescas e granola." },
      { nome: "Wrap de Húmus",      preco: "R$ 17,00", img: "", desc: "Húmus, legumes grelhados e rúcula no pão integral." },
      { nome: "Brownie Vegano",     preco: "R$ 16,00", img: "", desc: "Feito com farinha de amêndoas e chocolate 70%." },
      { nome: "Smoothie Verde",     preco: "R$ 14,00", img: "", desc: "Espinafre, maçã verde, gengibre e limão." },
      { nome: "Torrada de Abacate", preco: "R$ 15,00", img: "", desc: "Abacate temperado sobre pão integral artesanal." },
      { nome: "Muffin de Banana",   preco: "R$ 12,00", img: "", desc: "Sem ovos, sem leite, cheio de sabor e carinho." },
    ],
  },
};

const DESTAQUES = [
  { nome: "Brownie com Nozes",      preco: "R$ 16,00", img: "", desc: "Feito com chocolate belga e nozes caramelizadas." },
  { nome: "Pão de Queijo Recheado", preco: "R$ 14,00", img: "", desc: "Recheado com muçarela de búfala e tomate seco." },
  { nome: "Cheesecake de Frutas",   preco: "R$ 18,00", img: "", desc: "Cremoso e leve, com calda de frutas vermelhas." },
  { nome: "Açaí com Frutas",        preco: "R$ 16,00", img: "", desc: "Açaí puro com frutas frescas e granola." },
];

const ABAS = ["cafes", "bebidas", "salgados", "doces", "veganos"];

export default function CardapioPage() {
  const [abaAtiva, setAbaAtiva] = useState("cafes");
  const categoria = MENU[abaAtiva];

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <img
          src="/banner_cardapio.png"
          alt="Cardápio — Black Cat & Coffee"
          className={styles.heroBanner}
        />
      </section>

      {/* ── ABAS ── */}
      <nav className={styles.abas}>
        {ABAS.map((key) => (
          <button
            key={key}
            className={`${styles.aba} ${abaAtiva === key ? styles.abaAtiva : ""}`}
            onClick={() => setAbaAtiva(key)}
          >
            {MENU[key].label.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* ── CATEGORIA ATIVA ── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>{categoria.label}</h2>
            <p className={styles.sectionDesc}>{categoria.descricao}</p>
          </div>
        </div>
        <div className={styles.grid}>
          {categoria.itens.map((item) => (
            <div key={item.nome} className={styles.card}>
              <div className={styles.cardImg}>
                <img src={item.img} alt={item.nome} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNome}>{item.nome}</span>
                  <span className={styles.cardPreco}>{item.preco}</span>
                </div>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESTAQUES ── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Destaques do Cardápio</h2>
            <p className={styles.sectionDesc}>Combinações perfeitas para acompanhar seu café.</p>
          </div>
        </div>
        <div className={styles.grid}>
          {DESTAQUES.map((item) => (
            <div key={item.nome} className={styles.card}>
              <div className={styles.cardImg}>
                <img src={item.img} alt={item.nome} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNome}>{item.nome}</span>
                  <span className={styles.cardPreco}>{item.preco}</span>
                </div>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}