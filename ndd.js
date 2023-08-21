function area() {
    
    a = 4*PI*raio**2

    return a
}

function volume() {
    v = (4/3)*PI*raio**3

    return v
}

let a, exi_a, exi_v;
const PI = 3.14;
raio = parseFloat(prompt("Qual o valor do raio?\n"))
exi_a = area(raio)
exi_v=volume(raio)

console.log(exi_a)
console.log(exi_v)