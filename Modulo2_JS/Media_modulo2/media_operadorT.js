//Calcule a média e informe se está aprovado ou não. Utilize pelo menos um operador ternário.

function calcMedia() {
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
            i--;                     // repete entrada da nota inválida.
        }
    }
    return soma / 3;
}

let media = calcMedia();
let result = (media <7 ? 'Reprovado' : 'Aprovado')
console.log(` A média é ${media.toFixed(2)} e o aluno está ${result}.`)
