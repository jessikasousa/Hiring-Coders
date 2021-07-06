//pegar um input do usuário
//Se for sim, mostrar as categorias disponíveis, pergunta qual categoria escolher
//Se não, mostrar todos os livros em ordem crescente pela quantidade de páginas


const livros = require("./database");
//console.log(livros);

const readline = require("readline-sync");

const entradaInicial = readline.question("Deseja buscar um livro?S/N");

    if (entradaInicial.toLocaleUpperCase() === 'S') {
        console.log("Essas são as categorias disponíveis:")
        console.log("Produtividade","/Ficção","/Arquitetura","/Mitologia")

        const entradaCategoria = readline.question("Qual categoria você escolhe: ");

        const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

        console.table(retorno)
    } else {
        const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
        console.log('Essas são todos os livros disposíveis: ')
        console.table(livrosOrdenados)

}
