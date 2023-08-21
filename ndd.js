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
