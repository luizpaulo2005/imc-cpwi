const element_resultado = document.getElementById('resultado')
const input_altura = document.getElementById('altura')
const input_peso = document.getElementById('peso')

const calcularIndice = (indice) => {
    let mensagem;
    if (indice < 18.5) {
        mensagem = 'Abaixo do peso'
    } else if (indice >= 18.5 && indice < 24.9) {
        mensagem = 'Peso normal'
    } else if (indice >= 25 && indice < 29.9) {
        mensagem = 'Sobrepeso'
    } else if (indice >= 30 && indice < 34.9) {
        mensagem = 'Obesidade grau 1'
    } else if (indice >= 35 && indice < 39.9) {
        mensagem = 'Obesidade grau 2'
    } else {
        mensagem = 'Obesidade grau 3'
    }

    return mensagem;
}

const atualizarTela = () => {
    const peso = input_peso.value;
    const altura = input_altura.value / 100

    const imc = peso / altura ** 2
    const imc_string = JSON.stringify(imc)
    
    const mensagem = calcularIndice(imc)

    element_resultado.innerHTML = `Seu IMC é ${imc_string.substring(0, 5)} e você está ${mensagem}`
}