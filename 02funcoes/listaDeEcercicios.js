function escrevaNome(name) {
    return name;
}

function minhaIdade(idade) {
    if(idade >= 18) {
        console.log( escrevaNome('Kennedy, tenho ')  + idade, 'anos ' + 'e sou maior de idade.');
    } else {
        console.log( escrevaNome('Kennedy, tenho ')  + idade, 'anos ' + 'e sou menor de idade.');
    }
}

minhaIdade(20);


/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize oos códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de pagamento:
1 -À vista Débito, recebe 10% de desconto;
2 -À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 -Em duas vezes, preço normal de etiqueta sem juros;
4 -Acima de duas vezes, preço normal de etiqueta mais juros de 10%.

*/

function aplicarDesconto(valor, desconto) {
  return valor - (valor * desconto) / 100;
}

function aplicarJuros(valor, juros) {
    return valor + (valor * juros) / 100;
}

const precoPadrao = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoPadrao, 10)); 
} else if (formaDePagamento === 2){
    console.log(aplicarDesconto(precoPadrao, 15));
} else if (formaDePagamento === 3) {
    console.log(precoPadrao);
} else if (formaDePagamento === 4 )(
    console.log(aplicarJuros(precoPadrao, 10))
)

