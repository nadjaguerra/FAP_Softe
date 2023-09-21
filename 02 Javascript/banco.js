class Banco{
    constructor (conta, saldo, tipoConta, agencia){
        this.conta = conta
        this.saldo = saldo
        this.tipoConta = tipoConta
        this.agencia = agencia
    }

//metodos

buscarSaldo(valor){
    return this.saldo
}

deposito (valor){
    if (valor<=0){
        throw new Error('Valor inválido para depósito')
    }
    this.saldo += valor
    return `Deposito realizado!
    Seu saldo é de R$ ${this.saldo}`

}

saque(valor){
    if(valor <= 0){
        throw new Error('Valor inválido para realizar o saque.')   
     }
    if (valor > this.saldo){
        throw new Error('Saldo Insuficiente') 
    }
    this.saldo -= valor
    return `Saque  Realizado!
    Saldo Atual: R$ ${this.saldo}`
}

numeroConta(){
    return this.conta
}
agencia(){
    return this.agencia
}
tipoConta(){ 
    return this.tipoConta
}

}

try{

    //(conta, saldo, tipoConta, agencia)
const dados = new Banco('21479564', 10030, 'Corrente', '6324')

    console.log(`
    Agência: ${dados.agencia}
    Conta: ${dados.tipoConta} 
    Número da Conta => ${dados.numeroConta()}
    Saldo Atual: ${dados.buscarSaldo()}`)

    console.log(dados.deposito(1000))
    console.log(dados.saque(5000)) 


} catch (error) {
    console.error('Ocorreu um erro:', error.message);
  }

