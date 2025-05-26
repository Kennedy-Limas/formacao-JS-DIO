// const funcoes = require('./aula1')

// console.log(funcoes)
// console.log(funcoes.gets())

//utilizando o destruct 

/*
Uma sala contém  alunos e para cada aluno foi sorteado um numero de 1 a 100.
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

dados de entrada:
5
50
10
98
23

saida
98

*/


const { gets, print } = require('./aula1')

// const numerosSorteados = [];

// for (let i = 0; i < 5; i++) {

//     const numeroSorteados = gets();
//     numerosSorteados.push(numeroSorteados)
    
// }

// let maiorValor = 0

// for (let i = 0; i < numerosSorteados.length; i++) {
//     const numeroSorteados = numerosSorteados[i];
//     if(numeroSorteados > maiorValor) {
//         maiorValor = numeroSorteados
//     }

// }

// print(maiorValor)

//Refatorando o código acima

//totalmente dinamico não importa o tamnaho da lista
const quantidadeDeAlunos = gets();

let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {

    const numeroSorteados = gets();

    if(numeroSorteados > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteados;
    }
    
}

print(maiorValorEncontrado)