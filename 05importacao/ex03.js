/*
2) Faça um programa que calcule e imprima o salário a ser transferiso para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios 
O salário a ser tranferido é calculado da seguinte maneira:

valor bruto do salario - percentual de imposto mediante a faixa salarial + adicionais dos beneficios 

para calcula o percentual de imposte segue as aliquotas

de 0 1100 = 5%
de 1100.01 a 2500 = 10%
maior que 2500 = 15%

  Entrada: 
    2000
    250
  Saida:
    2050

*/

const { gets, print } = require("./aula-auxiliar03");

const valorBruto = gets();
const valorBeneficios = gets();

function calcularPercentual(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarLiquota(salario) {
  if( salario >= 0 && salario <= 1100 ){
    return 5
  } else if (salario >= 1100.01 && salario <= 2500) {
    return 10
  }else{
    return 15
  }
}

let aliquotaImposto = pegarLiquota(valorBruto)
let valorImposto = calcularPercentual(valorBruto, aliquotaImposto)

let valorTransferir = valorBruto - valorImposto + valorBeneficios


print(valorTransferir)
// print(calcularPercentual(valorBruto, 10));
// print(pegarLiquota(2501));