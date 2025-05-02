//Desafio 

//Faça um programa para calcular o valor de uma viagem.
//Você terá 3 variáveis. Sendo elas:
//     1 - Preço do combustivel
//     2 - Gasto médio de combustível do carro por KM;
//     3 - Distância em KM da veiagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let precoCombustivel = 5.79;
let kmPorLitros = 10;
let distanciaKM = 100;


let valorDaViagem = distanciaKM / kmPorLitros * precoCombustivel;

console.log(valorDaViagem.toFixed(2)); 


