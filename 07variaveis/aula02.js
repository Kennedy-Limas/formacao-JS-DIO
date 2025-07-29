/*
Estudos sobre orientações a Ptototipação

Orientação a Protótipo é um objeto onde se baseia um outro objeto pai - herança

*/

// const pessoa = {
//   genero: 'Masculino'
// }

// const renan = {
//     nome: 'renan',
//     idade: 30,
//     __proto__: pessoa
// }

// console.log(renan.genero)

//Função construtora


// function Pessoa(nome, idade) {
//   this.nome = nome,
//   this.idade = idade
// }

// Pessoa.prototype.falar = function () {
//   console.log(`Meu nome é: ${this.nome}`)
// }

//O modelo de classes são,por de baixo dos panos, protótipos em JS

//A class logo abaixo é o mesmo modelo representado acima

// class Pessoa {

//     constructor(nome, idade) {
//       this.nome = nome,
//       this.idade = idade
//     }

//     falar() {
//       console.log(`Meu nome é: ${this.nome}`)
//     }

// }

const pessoa = {
  idade: 18
}

const renan = {
  nome: 'Renan',
  idade: 30,
  __proto__: pessoa
}

console.log(renan.idade)
