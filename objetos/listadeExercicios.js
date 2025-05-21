/*
1) Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio decombustível por quilômetos rodado.
Crie um métdo que dado a quantidade de quilõmetors e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.

*/

class Carros {

    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){

        this.marca = marca,
        this.cor = cor,
        this.gastoMedio = gastoMedio
    
    }

    valorGastoEmKM(distancia, precoCombustivel) {
        return distancia * this.gastoMedio * precoCombustivel ;
    }

}

const palio = new Carros('Fiat', 'Branco', 1/12)
// console.log(palio.valorGastoEmKM(70, 5));

const corsa = new Carros('Fiat', 'Branco', 1/10)
// console.log(corsa.valorGastoEmKM(70, 5));


/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kgde pese e 1,75 de altura e peça ao José para dizer o valor do seu IMC;

*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }

  classificarIMC() {
    const imc = this.calcularIMC();

    if (imc < 18.5) {
      return (imc.toFixed(2), "Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
      return (imc.toFixed(2), "Peso Normal");
    } else if (imc >= 25 && imc < 30) {
      return (imc.toFixed(2), "Acima do Peso");
    } else if (imc >= 30 && imc < 40) {
      return (imc.toFixed(2), "Obeso");
    } else {
      return (imc.toFixed(2), "Obesidade Grave");
    }
  }
}

const kennedy = new Pessoa('kennedy', 70, 1.75);
console.log(kennedy.calcularIMC());

const flavio = new Pessoa('Flavio', 100, 1.75);
console.log(kennedy.classificarIMC());

