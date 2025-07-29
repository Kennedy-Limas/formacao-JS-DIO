

// ASSINCRONISMO

const numeroQualquer = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)
})

numeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Finalizou!')
    })

