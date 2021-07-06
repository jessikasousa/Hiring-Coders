const alunasHiringCoders = ["Jessika", "Gabriela", "Maria", Clara]

//Acessar informações num array
console.log(alunasHiringCoders[1])

//Operador spread
const alunasGama = [...alunasHiringCoders, "Julia"]

console.log(alunasGama)

//Metodos iteração
for (let i = 0; i < alunasGama.length; i++) {
    console.log(alunasGama[i])
}

//Map
alunasGama.map(aluna => console.log(aluna))

//Filter
const numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero%2 !=0)
console.log(numerosImpares)

const numerosPares = numeros.filter((numero) => numero % 2 != 0);
console.log(numerosPares)

const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b)=> b-a)
console.log(numerosOrdenadosDecrescente)


//reduce - reduz nosso array a um resultado de uma operação matemática

const numbers = [1,34,35]

const soma = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual
},5)

console.log(soma)//75