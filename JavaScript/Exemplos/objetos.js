const pessoa = {
    nome: "Jessika",
    idade: 28,
    cidade: "São Paulo"
}

//Notação de ponto
console.log(pessoa.nome) //"Jessika"

//Notação de colchetes
console.log(pessoa['idade']) //28

//Como desestruturar objetos
const {nome, idade, cidade} = pessoa
console.log(nome)
console.log(idade)
console.log(cidade)