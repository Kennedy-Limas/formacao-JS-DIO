

//REDUCE reduzimos a lista em um unico valor 

const lista = [1,2,3,4,5,6,7,8,9,10]

const somaDeTodososNumeros = lista.reduce((previus, current) => {
    return previus + current
})

console.log(somaDeTodososNumeros)