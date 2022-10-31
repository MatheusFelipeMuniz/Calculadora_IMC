
const calcular = document.getElementById('calcular')


function imc () {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso/(altura**2)).toFixed(1)
        
        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'Abaixo do peso';
        } else if (valorIMC < 25) {
            classificacao = 'no peso normal';
        } else if (valorIMC < 30 ) {
            classificacao = 'com sobrepeso';
        } else if (valorIMC < 35) {
            classificacao = 'com Obesidade grau 1';
        } else if (valorIMC < 40) {
            classificacao = 'com Obesidade grau 2';
        } else {
            classificacao = 'com Obesidade grau 3';
        }

        resultado.textContent = `${nome} tem o IMC de ${valorIMC} e está ${classificacao}.`
    }
    else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);
