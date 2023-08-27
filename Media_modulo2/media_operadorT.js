function calcMedia(){
    let soma = 0
    for(i=0;i<=2;i++) {
        nota = parseFloat(prompt(`Informe a ${i+1}ª nota: `))
        soma += nota
    }
    return soma/3           
}

let media = calcMedia();
let result = (media <7 ? 'Reprovado' : 'Aprovado')
console.log(` A média é ${media.toFixed(2)} e o aluno está ${result}.`)