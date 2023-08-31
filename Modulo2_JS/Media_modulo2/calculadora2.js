let opc, result, resto;
console.log('CALCULADORA')

while (true) {
    try {
        opc = prompt(`
_______________________________
Selecione a operação desejada:
+ : Soma
- : Subtração
* : Multiplicação
/ : Divisão
0 : Sair
_______________________________
`)

        if (opc === '0') {
            break;
        } else if (opc !== '+' && opc !== '-' && opc !== '*' && opc !== '/') {
            throw new Error('Essa opção não existe!')
        } else {
            const n1 = parseFloat(prompt('O primeiro valor será: '))
            const n2 = parseFloat(prompt('O segundo valor será: '))

            if (isNaN(n1) || isNaN(n2)) {
                throw new Error('O valor inserido não é um número válido.')
            }

            if (opc === '/' && n2 === 0) {
                throw new Error('Não é possível dividir por zero.')
            }

            if (opc === '+') {
                result = n1 + n2
            } else if (opc === '-') {
                result = n1 - n2
            } else if (opc === '*') {
                result = n1 * n2
            } else if (opc === '/') {
                result = n1 / n2
                resto = n1 % n2
            }

            if (opc === '/') {
                console.log(`O Resultado da operação escolhida é ${result.toFixed(2)}\nO Resto da divisão é ${resto}.`);

            } else {
                console.log(`O Resultado da operação escolhida é ${result.toFixed(2)}`);
            }
        }
    } catch (error) {
        console.error(error.message)
    }
}
console.log('FIM');
