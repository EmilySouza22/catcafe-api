const CARDAPIO = {
  cafes: [
    { id: 1, nome: 'Espresso',    preco: 8.00,  img: '/cafes/espresso.png',    desc: 'Clássico e encorpado. Feito com nosso blend exclusivo.' },
    { id: 2, nome: 'Cappuccino',  preco: 12.00, img: '/cafes/cappuccino.png',  desc: 'Leve e cremoso, com espresso, leite vaporizado e toque de cacau.' },
    { id: 3, nome: 'Cold Brew',   preco: 14.00, img: '/cafes/cold-brew.png',   desc: 'Extração a frio que resulta em um café leve, suave e refrescante.' },
    { id: 4, nome: 'Latte',       preco: 13.00, img: '/cafes/latte.png',       desc: 'Espresso com leite vaporizado. Suave, cremoso e reconfortante.' },
    { id: 5, nome: 'Mocha',       preco: 15.00, img: '/cafes/mocha.png',       desc: 'Combinação perfeita de espresso, chocolate e leite vaporizado.' },
    { id: 6, nome: 'Macchiato',   preco: 10.00, img: '/cafes/macchiato.png',   desc: 'Espresso marcado com uma pitada de espuma de leite.' },
    { id: 7, nome: 'Flat White',  preco: 13.00, img: '/cafes/flat-white.png',  desc: 'Espresso duplo com leite vaporizado sedoso e delicado.' },
    { id: 8, nome: 'Affogato',    preco: 16.00, img: '/cafes/affogato.png',    desc: 'Sorvete de baunilha afogado em espresso quente.' },
  ],
  bebidas: [
    { id: 9,  nome: 'Suco de Laranja',    preco: 10.00, img: '/bebidas/suco-laranja.png',    desc: 'Suco natural espremido na hora, fresquinho.' },
    { id: 10, nome: 'Limonada Suíça',     preco: 12.00, img: '/bebidas/limonada.png',         desc: 'Cremosa e refrescante, com leite condensado.' },
    { id: 11, nome: 'Chá Gelado',         preco: 9.00,  img: '/bebidas/cha-gelado.png',       desc: 'Chá preto ou verde gelado com hortelã.' },
    { id: 12, nome: 'Água de Coco',       preco: 8.00,  img: '/bebidas/agua-de-coco.png',     desc: 'Natural e hidratante, direto da caixinha.' },
    { id: 13, nome: 'Smoothie de Frutas', preco: 14.00, img: '/bebidas/smoothie.png',         desc: 'Blend de frutas da estação batidas na hora.' },
    { id: 14, nome: 'Chocolate Quente',   preco: 13.00, img: '/bebidas/chocolate-quente.png', desc: 'Cremoso e rico, feito com chocolate belga.' },
  ],
  salgados: [
    { id: 15, nome: 'Pão de Queijo Recheado', preco: 14.00, img: '/salgados/pao-queijo.png',  desc: 'Recheado com muçarela de búfala e tomate seco.' },
    { id: 16, nome: 'Croissant de Presunto',  preco: 16.00, img: '/salgados/croissant.png',   desc: 'Crocante por fora, macio por dentro, com presunto e queijo.' },
    { id: 17, nome: 'Quiche de Espinafre',    preco: 18.00, img: '/salgados/quiche.png',      desc: 'Massa crocante com recheio cremoso de espinafre e ricota.' },
    { id: 18, nome: 'Mini Wrap de Frango',    preco: 17.00, img: '/salgados/wrap.png',        desc: 'Frango grelhado, alface, tomate e molho especial.' },
    { id: 19, nome: 'Torrada Caprese',        preco: 15.00, img: '/salgados/torrada.png',     desc: 'Tomate, muçarela fresca e manjericão sobre pão artesanal.' },
    { id: 20, nome: 'Empada de Palmito',      preco: 10.00, img: '/salgados/empada.png',      desc: 'Massa amanteigada com recheio de palmito temperado.' },
  ],
  doces: [
    { id: 21, nome: 'Brownie com Nozes',    preco: 16.00, img: '/doces/brownie.png',        desc: 'Feito com chocolate belga e nozes caramelizadas.' },
    { id: 22, nome: 'Cheesecake de Frutas', preco: 18.00, img: '/doces/cheesecake.png',     desc: 'Cremoso e leve, com calda de frutas vermelhas.' },
    { id: 23, nome: 'Muffin de Blueberry',  preco: 12.00, img: '/doces/muffin.png',         desc: 'Fofinho, com mirtilos frescos em cada mordida.' },
    { id: 24, nome: 'Cookie de Chocolate',  preco: 10.00, img: '/doces/cookie.png',         desc: 'Crocante por fora, macio por dentro. Irresistível.' },
    { id: 25, nome: 'Torta de Limão',       preco: 17.00, img: '/doces/torta-limao.png',    desc: 'Massa crocante, creme de limão e merengue tostado.' },
    { id: 26, nome: 'Cinnamon Roll',        preco: 14.00, img: '/doces/cinnamon-roll.png',  desc: 'Enrollado de canela com cobertura de cream cheese.' },
  ],
  veganos: [
    { id: 27, nome: 'Açaí com Frutas',      preco: 16.00, img: '/veganos/acai.png',          desc: 'Açaí puro com frutas frescas e granola.' },
    { id: 28, nome: 'Wrap de Húmus',         preco: 17.00, img: '/veganos/wrap-humus.png',    desc: 'Húmus, legumes grelhados e rúcula no pão integral.' },
    { id: 29, nome: 'Brownie Vegano',        preco: 16.00, img: '/veganos/brownie-vegano.png',desc: 'Feito com farinha de amêndoas e chocolate 70%.' },
    { id: 30, nome: 'Smoothie Verde',        preco: 14.00, img: '/veganos/smoothie-verde.png',desc: 'Espinafre, maçã verde, gengibre e limão.' },
    { id: 31, nome: 'Torrada de Abacate',    preco: 15.00, img: '/veganos/torrada-abacate.png',desc: 'Abacate temperado sobre pão integral artesanal.' },
    { id: 32, nome: 'Muffin de Banana',      preco: 12.00, img: '/veganos/muffin-banana.png', desc: 'Sem ovos, sem leite, cheio de sabor e carinho.' },
  ],
};

export function getCardapio(req, res) {
  return res.status(200).json(CARDAPIO);
}

export function getCategoria(req, res) {
  const { categoria } = req.params;
  const itens = CARDAPIO[categoria];
  if (!itens) {
    return res.status(404).json({ error: 'Categoria não encontrada.' });
  }
  return res.status(200).json(itens);
}