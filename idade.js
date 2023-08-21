/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.
A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e 
continuará perguntando até que um valor correto seja preenchido.*/

let rodar = true;

while (rodar) {
try {
    nome = prompt('Digite seu nome: \n')
    ano  = parseInt(prompt('Digite o ano que você nasceu: \n'))
   
    if (isNaN(ano) || ano > 2022 || ano < 1922) {
        throw new Error('Entrada inválida\n\n');
    }
     idade = 2023 - ano;
    console.log(`${nome}, em 2023 você estará completando ${idade} ano(s) de idade!`)
     rodar = false;
} 
catch (erro) {
    console.log(`Ocorreu um erro: ${erro.message}`)
}}
