function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log('valor acima do permitido')
    } else{
        return area
    }
}

console.log(area(2,  2))
console.log(area(20, 24))