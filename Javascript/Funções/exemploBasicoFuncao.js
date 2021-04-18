// Função sem retorno
function imprimirSoma(a, b ){
    console.log(a + b)
}

imprimirSoma(5, 2)

// Função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 5))