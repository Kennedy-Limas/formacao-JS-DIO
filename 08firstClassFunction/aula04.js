//Invocação direta, Call, Apply e Operador New

const pessoa = {
    nome: 'Kennedy',
    idade: 25
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['Olaaaa'])
gritar.call(pessoa, 'Ollaa')