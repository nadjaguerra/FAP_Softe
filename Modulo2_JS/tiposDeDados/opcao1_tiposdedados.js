/*Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. 
Antes de começar a codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o
código utilizando exemplos para cada variável que respeitem os tipos identificados. 
Certifiquem-se de que os valores correspondam aos tipos de dados corretos*/

/*Nome = String
  Salário = Number (Float)
  Idade = Number (Inteiro)
  Diploma = Boolean
*/


function cadastro(){
    nome = prompt("Digite o Nome: ")
    salario = parseFloat(prompt("Digite o salário: "))
    idade = parseInt(prompt("Digite a idade: "))
    diploma = prompt("Informe se tem diploma: (sim ou nao) ").toLowerCase() === "sim"
    
    return ("Nome: " + typeof(nome)+'\nSalario: '+ typeof(salario) +
         '\nIdade: ' + typeof(idade) + '\nDiploma: ' + typeof(diploma))
}

console.log(cadastro())