const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas1 = []
for (let i in notas) {
 if (notas[1] < 7) {
     notasBaixas.push(notas[1])
 }
}

console.log(notasBaixas1)

//Com callback
notasBaixas2 = notas.filter(function (nota){
    return nota <7
})

console.log(notasBaixas2)