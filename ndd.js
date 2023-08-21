function area() {
    
    a = 4*PI*raio**2

    return a
}

function volume() {
    v = (4/3)*PI*raio**3

    return v
}


const PI = 3.14;
raio = parseFloat(prompt("Qual o valor do raio?\n"))

console.log(area(raio))
console.log(volume(raio))
