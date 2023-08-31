let opc;
console.log ('CALCULADORA')
while (opc !== 0) {
opc = parseInt(prompt('\n________________\nSelecione a operação desejada \n________________\n1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n0: Sair\n\n'))

if (opc < 0 || opc > 4){
console.log('Essa opção não existe!');
break
}
if (opc === 0) {
break
}
n1 = parseFloat(prompt('O primeiro valor será: '))   
n2 = parseFloat(prompt('O segundo valor será: '))    

 if(opc === 1){
    result = n1+n2
}else if (opc === 2){
    result = n1-n2
}else if (opc === 3){
    result = n1*n2
}else if (opc === 4){
    result = n1/n2
}

console.log (`O Resultado da operação escolhida é ${result}!`)
}
console.log ('Até a Próxima!')

