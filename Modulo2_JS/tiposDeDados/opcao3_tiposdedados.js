/*Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. 
Antes de começar a codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o
 código utilizando exemplos para cada variável que respeitem os tipos identificados. 
Certifiquem-se de que os valores correspondam aos tipos de dados corretos*/

/*Nome = String
  Salário = Number (Float)
  Idade = Number (Inteiro)
  Diploma = Boolean
*/

// OUTRA FORMA DE FAZER. LIMITANDO OS CARACTERES DA STRING E VERIFICANDO SE FOI DIGITADO APENAS NÚMEROS

function cadastro(){
    nome = prompt("Digite o Nome: ")
    salario = parseFloat(prompt("Digite o salário: "))
    idade = parseInt(prompt("Digite a idade: "))
    diploma = prompt("Informe se tem diploma: (sim ou nao) ").toLowerCase() === "sim"
}

//por opção, vou delimitar a string para apenas letras, então essa função vai verificar se a string 
//contém apenas letras maiúsculas ou minúsculas
function verificaNome(nome) {
    const valido = /^[A-Za-z]+$/;       
    return valido.test(nome);                //.test() vai verificar se corresponde ao que foi pedido e retorna true
}
//verifica se possui apenas numeros
function verificaNum(num) {
    const numValido = /^[0-9]+$/;
    return numValido.test(num);                  //vai verificar se corresponde ao que foi pedido e retorna true
}

let dados = false;

while (!dados) {
    
    try {
    // Chamando a função dentro do try
    const resultado =  cadastro();
         if (verificaNome(nome) == false || verificaNum(salario) == false || verificaNum(idade) == false  ) {
        throw new Error('Informe corretamente seus dados.\n\n');
         }
    console.log('*************\n\n')
    console.log(`
Nome: ${typeof nome}
Salario: ${typeof salario}
Idade: ${typeof idade}
Diploma: ${typeof diploma}
`);
     dados = true;
    } 
    catch (erro) {
    alert("Ocorreu um erro: " + erro);
    }    
} 