

// MAP 

class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const lista = [new Pessoa('Kennedy'), new Pessoa('Pedro') , new Pessoa('Vitor') , new Pessoa('Slame') , new Pessoa('Frederich')]

const listaDeNomes = lista.map((element) => {
    return element.name
})

console.log(listaDeNomes)