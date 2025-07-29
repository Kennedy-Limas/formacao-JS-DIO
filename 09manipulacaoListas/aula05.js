

// JOIN junção de valores

const listaNumber = [1,2,3,4,5,6,7,8,9,10]

console.log(listaNumber.join('/'))

const listaNomes = [{nome: 'Kennedy'}, {nome: 'Flavio'}, {nome: 'Amanda'} ]

console.log(listaNomes.map((e) => e.nome)
          .filter((e) => e.startsWith('A'))
          .join('; ')
)
// console.log(listaNomes.map((e) => e.nome).join('; '))