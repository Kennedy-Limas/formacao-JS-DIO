// 1) Faça um algoritimo que dado as 3 notas toradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

//Média = (nota 1 + nota 2 + nota 3) / 3

/*

Classificação: 
    Média menor que 5, reprovado;
    Média entre 5 e 7, recuperação;
    Média acima de 7, passou de semestre;

*/

// const notaReprovado = 5;
// const notaRecuperação =7;
// const notaPassou = 8;

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