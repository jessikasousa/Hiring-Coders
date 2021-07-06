const filmes = [
  {
    id: 1,
    titulo: "Luca",
    descricao:
      "A obra é um dos lançamentos mais recentes de 2021 e, com certeza, já está entre os melhores do ano. Uma obra sensível sobre amizade e aceitação de maneira inovadora como só a Pixar consegue fazer.",
    duracao: 120,
  },
  {
    id: 2,
    titulo: "Judas e o Messias Negro",
    descricao:
      "Estrelado por LaKeith Standfield e Daniel Kaluuya, que já recebeu um Oscar de Melhor Ator Coadjuvante, o drama inspirado em uma história real é um dos filmes para assistir o quanto antes.",
    duracao: 90,
  },
  {
    id: 3,
    titulo: "Cruella",
    descricao:
      "Não tem como falar de filmes lançados em 2021 sem mencionar a obra estrelada por Emma Stone, que traz para as grandes telas a história de uma das maiores vilãs da Disney. Com muitas reviravoltas e looks memoráveis, Cruella é uma adaptação divertida de assistir do começo ao fim.",
    duracao: 85,
  },
]

const [{ id, titulo, descricao, duracao}] = filmes
//console.log(titulo)

filmes.map(filme => console.log(filme.descricao))