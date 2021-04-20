/* Javascript trata função como um "Cidadão de primeira linha" pois voçê consegue passar uma função como 
parametro, consegue retornar uma função a partir de uma outra função, criar função de forma literal,
armazenar uma função dentro de uma variavel */

// criar função de forma literal
function fun1() {}

// Armazenar em uma variavel
const fun2 = function() {}

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0] (2, 5))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//  Passar função como parametro
function run(fun){
    fun()
}
run(function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3) (4)