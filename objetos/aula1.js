//Instancia é uma ocorrencia 
// const pessoa = {
//     nome: 'Kennedy',
//     idade: 28,

//     descrever: function(){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }

// }

// pessoa.descrever();

//Classe é uma definição
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const teste1 = new Pessoa('Kennedy', 23);
const teste2 = new Pessoa('João', 23);

compararPessoas(teste1, teste2);