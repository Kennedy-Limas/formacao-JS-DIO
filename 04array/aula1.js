const alunos = ['João', 'Maria', 'Renan'];

alunos.push('Carol');

// console.log(alunos);


const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
}

const media = soma / notas.length
console.log(media)



// const nome = 'Kennedy Anderson de Lima';
// // console.log(nome.length)

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// }


