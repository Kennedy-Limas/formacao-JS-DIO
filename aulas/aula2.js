//   ESTRUTURAS CONDICIONAIS

// const numero = 0;

// const numeroPar = (numero % 2) === 0;
// // console.log(numeroPar)

// if ( numero === 0 ) {
//     console.log('O numero é invalido')
// } else if ( numeroPar ) {
//     console.log('Par')
// } else {
//     console.log('Impar')
// }

// if (!numeroPar) {
//     console.log('Impar')
// }


//Desafio 2

//Faça um programa para calcular o valor de uma viagem.
//Você terá 5 variáveis. Sendo elas:
//     1 - Preço do etanol
//     2 - Preço do gasolina
//     2 - tipo de combustível que está no seu carro;
//     3 - Gasto médio de combustível do carro por KM;
//     3 - Distância em KM da veiagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const etanol = 4.09;
const gasolina = 6.09;
const litrosEmKm = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / litrosEmKm;

if ( tipoCombustivel === 'Etanol' ) {
    const valorGasto = litrosConsumidos * etanol;
    console.log('O tipo de combutível do meu carro é Alcool e o preço é', valorGasto.toFixed(2))
} else {
    const valorGasto = litrosConsumidos * gasolina;
    console.log('O tipo de combutível do meu carro é Gasolina e o preço é', valorGasto.toFixed(2))
}