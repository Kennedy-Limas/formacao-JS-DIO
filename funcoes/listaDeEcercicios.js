function escrevaNome(name) {
    return name;
}

function minhaIdade(idade) {
    if(idade >= 18) {
        console.log( escrevaNome('Kennedy, tenho ')  + idade, 'anos ' + 'e sou maior de idade.');
    } else {
        console.log( escrevaNome('Kennedy, tenho ')  + idade, 'anos ' + 'e sou menor de idade.');
    }
}

minhaIdade(20);