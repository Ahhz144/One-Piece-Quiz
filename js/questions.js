// criando uma matriz e passando o número, perguntas, opções e respostas
let questions = [
    {
    image: document.querySelector(".que_text").innerHTML="<img src='./imagem/luffy.jpc'",
    numb: 1,
    question: "Quem deu o Chapéu de Palha para Luffy?",
    answer: "Shanks",
    options: [
      "Zoro",
      "Shanks",
      "Rayleigh",
      "Kaido"
    ]
  },

    {
    numb: 2,
    question: "Qual é o nome da Akuma no Mi de Luffy?",
    answer: "Gomu Gomu no Mi",
    options: [
      "Gomu Gomu no Mi",
      "Bara Bara no Mi",
      "Pico Pico no Mi",
      "Anbu Anbu no Mi"
    ]
  },

    {
    numb: 3,
    question: "Como Luffy come a fruta?",
    answer: "Ele simplesmente encontra e come",
    options: [
      "Ele simplesmente encontra e come",
      "Roubou ela de Shanks",
      "Comprando a fruta",
      "Ganhou em uma luta"
    ]
  },

    {
    numb: 4,
    question: "Como Shanks perdeu seu braço?",
    answer: "Um monstro marinho comeu",
    options: [
      "Batalha contra o Barba Branca",
      "Batalha contra Kaidu",
      "No meio de uma Guerra",
      "Um monstro marinho comeu"
    ]
  },

    {
    numb: 5,
    question: "Qual vilão que causou grande impacto no passado de Nami?",
    answer: "Arlong",
    options: [
      "Buggy",
      "Crocodile",
      "Arlong",
      "Capitão Kuro"
    ]
  },

  {
     numb: 6,
     question: "Quem é luffy",
     answer: "Pirata",
     options: [
         "Rei dos piratas",
         "Vilão",
         "Marinheiro",
         "Pirata"
    ]
  },

  {
  numb: 7,
  question: "Como o Rei dos Piratas, Gol D. Roger morreu?",
  answer: "Execução",
  options: [
    "Suicídio",
    "Execução",
    "Afogado",
    "Em batalha"
    ]
  },

  {
  numb: 8,
  question: "Quem foi o primeiro companheiro de Luffy?",
  answer: "Zoro",
  options: [
      "Usopp",
      "Nami",
      "Zoro",
      "Frank"
]
},

{
  numb: 9,
  question: "Qual o maior obstáculo dos usuários de uma Akuma no Mi?",
  answer: "Eles não podem nadar",
  options: [
      "Eles não podem nadar",
      "Eles não podem Comer",
      "Eles não podem pular",
      "Eles não podem se ferir"
]
},

{
  numb: 10,
  question: "Quem é o músico da tripulçao do Luffy",
  answer: "Brook",
  options: [
      "Nami",
      "Brook",
      "Franky",
      "Zoro"
]
}

  // você pode descomentar os códigos abaixo e duplicar quanto mais quiser adicionar a pergunta
  // mas lembre-se de que você precisa fornecer o valor numb serializar como 1,2,3,5,6,7,8,9 .....

  // {
  // numb: 6,
  // question: "Sua pergunta está aqui",
  // resposta: "A resposta correta da pergunta está aqui",
  // opções: [
  //     "Opção 1",
  //     "opção 2",
  // "opção 3",
  // "opção 4"
  //]
  //},
];