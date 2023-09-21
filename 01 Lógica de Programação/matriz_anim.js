const animais = []
const numAnimais = parseInt(prompt(`Quantos animais deseja cadastrar? 
`))

for (i=0; i<numAnimais; i++){
    console.log('____________________________________________')
    let nome = prompt(`Informe o Nome do ${i+1}º animal: `)
    let especie= prompt(`Informe a espécie do(a) ${nome}: `)
    let idade = prompt(`E qual a idade do(a) ${nome}? `)
    console.log('____________________________________________')
    
    const animal = {
        nome,
        especie,
        idade
    }
    animais.push(animal)
}

animais.forEach((animal) =>{
    console.log( animal.nome, animal.especie, animal.idade)
})