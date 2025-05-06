//   ESTRUTURAS CONDICIONAIS

const numero = 0;

const numeroPar = (numero % 2) === 0;
// console.log(numeroPar)

if ( numero === 0 ) {
    console.log('O numero é invalido')
} else if ( numeroPar ) {
    console.log('Par')
} else {
    console.log('Impar')
}

// if (!numeroPar) {
//     console.log('Impar')
// }
