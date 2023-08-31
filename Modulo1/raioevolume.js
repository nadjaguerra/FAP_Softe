function area() {

    return 4*PI*raio**2
}

function volume() {
    
    return (4/3)*PI*raio**3
}


const PI = 3.14;
raio = parseFloat(prompt("Qual o valor do raio?\n"))

console.log(area())
console.log(volume())
