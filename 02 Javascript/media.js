function media(){

    let soma = 0;
    for (let i = 0; i <= 2; i++) {
        try {
            let nota = parseFloat(prompt(`Informe a ${i + 1}ª nota: `));
            if (isNaN(nota)) {
                throw new Error('Informe apenas números.');
            }
            soma += nota;
        } catch (error) {
            console.error(error.message);
            i--;                     
        }
    }
    return soma / 3;
}   

let = media = media()
console.log(`A media do aluno é será ${media.toFixed(2)}`)