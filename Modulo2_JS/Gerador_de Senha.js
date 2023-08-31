/*Crie em programa que contenha:
1 - uma função tradicional e sem parametros;
2 - uma função tradicional com parametros e um returno de valor;
3 - uma arrow function com parametros que retorne um valor. 
*/

//O código abaixo é um GERADOR DE SENHA

//Função para gerar uma string aleatória
function gerarStringAleatoria(){
    const opCaracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{[]}|:;'<>,.?/"

    // aqui vai gerar uma string aleatoria de tamanho mínimo
  for (let i = 0; i < limite; i++) {
    geraString += opCaracteres[Math.floor(Math.random() * opCaracteres.length)];  
     //o Math.floor() arredonda um número e o Math.random gera numeros aleatorios
  }
  return geraString;
}

//Função para validar a string gerada
function validaString(geraString){
    if (randomString.length < 8) {
        console.log("A senha deve ter pelo menos 8 caracteres.");
        return false;
      }
      // .match verifica se há pelo menos 1 elemento de cada do que foi pedido
      const letraMaiusc = geraString.match(/[A-Z]/)
      const letraMinus = geraString.match(/[a-z]/)
      const num = geraString.match(/[0-9]/)
      const caracEspecial = geraString.match(/[!@#$%^&*()-_=+{[]}|\:;'<>,.?/]/)
    
      if (!letraMaiusc || !letraMinus || !num || !caracEspecial) {
        console.log(`A senha deve conter pelo menos um de cada item abaixo:
                     - Letra maiúscula
                     - Letra minúscula
                     - Número
                     - Caractere Especial.`)
        return false
      }
      
     return true    
}

// Função (tipo arrow) para exibir a senha
const exibeSenha = (geraString) => {
    console.log (`A senha é ${geraString}`)
}

let geraString = (gerarStringAleatoria())
console.log(geraString)