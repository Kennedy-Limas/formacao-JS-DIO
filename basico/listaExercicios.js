/* 
1) Faça um algoritimo que dado as 3 notas toradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3

Classificação: 
    Média menor que 5, reprovado;
    Média entre 5 e 7, recuperação;
    Média acima de 7, passou de semestre;

*/

const nota1 = 5;
const nota2 = 9;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3; 
console.log(media)

if (media < 5) {
    console.log('O aluno foi reprovado')
} else if (media >= 5 && media <= 7) {
 console.log('O aluno está de recuperação')
} else {
    console.log('O aluno passou de semestre')
}


/*
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição do peso de uma pessoa adulta. 

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

const peso = 82;
const altura = 1.82;

const calcIMC = peso / Math.pow(altura, 2);

// console.log(calcIMC)

if (calcIMC < 18.5) {
    console.log(calcIMC.toFixed(2), 'Abaixo do peso')
} else if (calcIMC >= 18.5 && calcIMC < 25) {
    console.log(calcIMC.toFixed(2), 'Peso Normal')
} else if (calcIMC >= 25 && calcIMC < 30) {
    console.log(calcIMC.toFixed(2), 'Acima do Peso')
} else if (calcIMC >= 30 && calcIMC < 40) {
    console.log(calcIMC.toFixed(2), 'Obeso')
} else {
    console.log(calcIMC.toFixed(2), 'Obesidade Grave')
}

/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize oos códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de pagamento:
1 -À vista Débito, recebe 10% de desconto;
2 -À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 -Em duas vezes, preço normal de etiqueta sem juros;
4 -Acima de duas vezes, preço normal de etiqueta mais juros de 10%.

*/

const precoPadrao = 100;

const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoPadrao - (precoPadrao * 0.1) ); 
} else if (formaDePagamento === 2){
    console.log(precoPadrao - (precoPadrao * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoPadrao);
} else if (formaDePagamento === 4 )(
    console.log(precoPadrao + (precoPadrao * 0.1))
)

