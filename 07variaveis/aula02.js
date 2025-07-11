/*
Estudos sobre orientações a Ptototipação

Orientação a Protótipo é um objeto onde se baseia um outro objeto pai - herança

*/

const pessoa = {
  genero: 'Masculino'
}

const renan = {
    nome: 'renan',
    idade: 30,
    _proto_: pessoa
}

console.log(renan.genero)