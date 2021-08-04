function soma(a, b) {
    return a + b;
}

function multiplicacao(a, b) {
    return a * b;
}

function subtracao(a, b) {
    return a - b;
}

function divisao(a, b) {
    return a / b;
}

//O modulo habilita para utilizacao em outras partes do programa
module.exports = {
    soma,
    multiplicacao,
    subtracao,
    divisao
}