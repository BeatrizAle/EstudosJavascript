// var pode ter 2 tipos de escopos = global e dentro de chaves

var numero = 2 
{
    var numero = 3
    console.log('dentro =', numero)
    
}

console.log('fora =', numero)