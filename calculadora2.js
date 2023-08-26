let opc, result, resto;
console.log('CALCULADORA');

while (true) {
    opc = prompt(`
______________________________
Selecione a operação desejada:
+ : Soma
- : Subtração
* : Multiplicação
/ : Divisão
0 : Sair
______________________________
`);

    if (opc === '0') {
        break;
    } else if (opc !== '+' && opc !== '-' && opc !== '*' && opc !== '/') {
        console.log('Essa opção não existe!');
    } else {
        const n1 = parseFloat(prompt('O primeiro valor será: '));
        const n2 = parseFloat(prompt('O segundo valor será: '));
        
       
        if (opc == '+') {
            result = n1 + n2;
        } else if (opc == '-') {
            result = n1 - n2;
        } else if (opc == '*') {
            result = n1 * n2;
        } else if (opc == '/') {
            result = n1 / n2;
            resto = n1 % n2;
             if (n2 === 0) {
                console.log('Não é possível dividir por zero.');
                continue;
            }
        }

        if (opc === '/') {
            console.log(`O Resultado da operação escolhida é ${result.toFixed(2)}`);
            console.log(`O Resto da divisão é ${resto}.`);
        } else {
            console.log(`O Resultado da operação escolhida é ${result.toFixed(2)}`);
        }
    }
}
console.log('FIM')

