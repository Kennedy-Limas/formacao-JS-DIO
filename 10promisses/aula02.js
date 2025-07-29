
//ASSINCRONISMO de uma forma reduzida da aula 01 - é a mesma estruturação porem aqui o async await é de uma escrita digamos que mais elegante e estruturada.

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')


async function buscarArq() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)        
    } catch (error) {
        console.log('Deu ruim!', error)
    } finally {
        console.log('Finalizado!')
    }
}

buscarArq()


// promessaLeituraArq
//     .then((arquivo) => {
//         const conteudo = arquivo.toString('utf8')
//         return conteudo
//     })
//     .then((texto) => texto.split('\n').slice(1))
//     .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
//         const [nome, feito] = linha.split(';')
//         return {
//             nome,
//             feito: feito === 'true'
//         }
//     }))
//     .then((linhasDeTarefas) => console.log(linhasDeTarefas))
//     .catch((error) =>  console.log('Deu ruim', error))
