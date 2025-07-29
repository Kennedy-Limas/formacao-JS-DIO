

// FOREACH é uma forma reduzida de percorremos uma lista dentro da função

const lista = [1,2,3,4,5,6,7,8,9]

lista.forEach((value, i, listRef) => {
    console.log(value + i)
})