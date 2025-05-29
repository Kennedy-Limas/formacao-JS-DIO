/*
2) Faça um programa que receba N(quantiidade de numeros) e seus respectivos valores 
imprima o maior numero par e o menor numero impar.
Exemplo:
    Entrada:
        5
        3
        4
        1
        10
        8
    Saida:
        Maior numero par: 10
        Menor numero impar: 1
*/

const { gets, print } = require("./aula-auxiliar02");

const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
  let valorRecebido = gets();

  if (valorRecebido % 2 === 0) {
    if (maiorNumeroPar === null || valorRecebido > maiorNumeroPar) {
      maiorNumeroPar = valorRecebido;
    }
  } else {
    if (menorNumeroImpar === null || valorRecebido < menorNumeroImpar) {
      menorNumeroImpar = valorRecebido;
    } 
  }
}

print('O maior numero par é: ' + maiorNumeroPar);
print('O menor numero impar é: ' + menorNumeroImpar);
