
let entradas = [ 9,2,3,4,5,6,7,8,9,100];
let i = 0;


function gets() {

    const valor = entradas[i];
    i++;
    return valor;

}


function print(texto) {

    console.log(texto);

}


module.exports = { gets , print};