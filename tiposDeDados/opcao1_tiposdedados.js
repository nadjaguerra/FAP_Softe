/*Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. 
Antes de começar a codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o
código utilizando exemplos para cada variável que respeitem os tipos identificados. 
Certifiquem-se de que os valores correspondam aos tipos de dados corretos*/

/*Nome = String
  Salário = Number (Float)
  Idade = Number (Inteiro)
  Diploma = Boolean
*/


function cadastro() {
    try {
        var nome = prompt("Digite o Nome: ")
        var salario = parseFloat(prompt("Digite o salário: "))
        var idade = parseInt(prompt("Digite a idade: "))
        var diploma = prompt("Informe se tem diploma (sim ou nao): ").toLowerCase()

        if (!isNaN(nome)||isNaN(salario) || isNaN(idade)) {
            throw new Error('Insira um valor válido.')
        }

        var pessoa = {
            nome: nome,
            salario: salario,
            idade: idade,
            diploma: diploma
        }

        var tipos = {
            nome: typeof nome,
            salario: typeof salario,
            idade: typeof idade,
            diploma: typeof diploma
        }

        console.log('__________________________________\n\n')
        console.log("Tipos das Variáveis:\n", tipos)

        return pessoa
    } catch (error) {
        console.error(error.message)
       
    }
}

var cadastroPessoa = cadastro()
console.log("Cadastro Final:", cadastroPessoa)

