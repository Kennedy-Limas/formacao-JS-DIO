function sayMyName(name) {
    // console.log('Your name is: ' + name);
}

sayMyName('Kennedy');
sayMyName('Helen');

function quadrado(valor) {
    return valor * valor
}

const quadradoDeDez = quadrado(10)
// console.log(quadradoDeDez)


function incrementarJuros(valor, percentualJuros) {
    const valorDoAcrescimo = (percentualJuros / 100) * valor
    return valor + valorDoAcrescimo
}

// console.log(incrementarJuros(100, 10))
// console.log(incrementarJuros(100, 15))


/*
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição do peso de uma pessoa adulta. Refatore o código utilizando funções:

Formula do IMC:
IMC = peso /(altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:

Abaicp de 18.5 Abaixo do peso
Entre 18.5 3 25 Peso normal
Entre 25 e 30 Acima do peso
Entre 30 e 40 Obeso
Acima de 40 Obesidade Grave

*/

function calcIMC(peso, altura){
    
   return peso / Math.pow(altura, 2)
    
}

function classificarIMC(imc) {

  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso Normal";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do Peso";
  } else if (imc >= 30 && imc < 40) {
    return "Obeso";
  } else {
    return "Obesidade Grave";
  }

}

// function main() {
//   const peso = 82;
//   const altura = 1.82;
//   const imc = calcIMC(peso, altura);

//   console.log(classificarIMC(imc));
// }

// main();

// Função Invocada Imediatamente E NÃO NOMEADA 

(function () {
    const peso = 82;
    const altura = 1.82;
    const imc = calcIMC(peso, altura);

    console.log(classificarIMC(imc));
})();