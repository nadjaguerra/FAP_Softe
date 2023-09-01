//O código abaixo é um GERADOR DE SENHA

// 1ª - Função para gerar uma string aleatória
function gerarStringAleatoria() {
    const opCaracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_=+{}\[\]|:;'<>,.?/"
    const tamanhoMinimo = 10                // tamanho mínimo da senha
    let geraString = ""
  
    for (let i = 0; i < tamanhoMinimo; i++) {
        geraString += opCaracteres[Math.floor(Math.random() * opCaracteres.length)]
        //o Math.floor() arredonda um número e o Math.random gera numeros aleatorios
        
    }
    return geraString
  }
  
  //2ª - Função para validar a string gerada
  function validaString(geraString) {
  
    // .match verifica se há pelo menos 1 elemento de cada do que foi pedido
    const letraMaiusc = geraString.match(/[A-Z]/)
    const letraMinus = geraString.match(/[a-z]/)
    const num = geraString.match(/[0-9]/)
    const caracEspecial = geraString.match(/[!@#$%^&*()_=+{}\[\]|:;'<>,.?/]/)
  
    const senhaValida = letraMaiusc && letraMinus && num && caracEspecial
    return senhaValida
  }
  
  //3ª Função (tipo arrow) para exibir a senha
  const exibeSenha = (senha) => {
   
    console.log(`A senha é ${senha}`);
  }
  
  //chamando a função para exibir a senha criada
  exibeSenha(gerarStringAleatoria()); 
  