const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
const num = 20

for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
        console.log(`O número ${num} está na ${i}ª posição.`)
        return 
    }
}
console.log(`Não há um número ${num} no array.`)
