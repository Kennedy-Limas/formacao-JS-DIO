const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

const promessaLeituraArq = fs.promises.readFile(filePath)
 
promessaLeituraArq
    .then((arquivo) => {
        const conteudo = arquivo.toString('utf8')
        return conteudo
    })
    .then((texto) => texto.split('\n').slice(1))
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito === 'true'
        }
    }))
    .then((linhasDeTarefas) => console.log(linhasDeTarefas))
    .catch((error) =>  console.log('Deu ruim', error))
