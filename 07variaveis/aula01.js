/*

boolean
null
undefined
number
string
symbol

*/

/*

A diferença entre null e undefined é que null existe um valor porem não se é enccontrado e para undefined é que não há existencia de um valor.

symbol é um objeto imutável único - pouco usável 

*/

const pessoa = {

    nome: "Kennedy",
    idade: 30,
    falar: function() {
        console.log(`Meu nome é ${this.nome}`)
    }

}

const y = pessoa.falar 
pessoa.falar()
y()