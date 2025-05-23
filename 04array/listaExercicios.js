// 1) Crie um programa que dado um numero crie a sua tabuada

const tabuada =  5;

for (let i = 0; i <= 10; i++) {

    console.log(i * tabuada)
    
}

// 2) Crei um programa que seha capaz de percorrer uma lista de números e imprima cada número par encontrado.

const lista = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < lista.length; i++) {
    
    const numeroDaLista = lista[i]

    if (numeroDaLista  % 2 === 0) {

        // console.log(numeroDaLista)

    }


}

 const numeros = [];
 for (let i = 0; i < 10; i++) {
   numeros.push(i);
 }
 console.log(numeros);