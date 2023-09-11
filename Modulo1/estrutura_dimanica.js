class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filho = null;
    }

    temFilho(nome, idade) {
        this.filho = new Pessoa(nome, idade);
    }

    cadFim() {
        console.log(`Nome: ${this.nome} || Idade: ${this.idade} anos de idade.`);

        if (this.filho) {
            console.log(`Filho: ${this.filho.nome} || Idade: ${this.filho.idade} anos de idade.`);
        } else {
            console.log(`Não tem filho!`);
        }
        console.log(`_________________________________________________`);
    }
}

const pessoa1 = new Pessoa('Luiz', 27);
const pessoa2 = new Pessoa('Helena', 15);
const pessoa3 = new Pessoa('Luma', 30);
const pessoa4 = new Pessoa('Tito', 47);

pessoa1.temFilho('Liz', 2);
pessoa3.temFilho('Leo', 5);
pessoa4.temFilho('Maitê', 17);

pessoa1.cadFim();
pessoa2.cadFim();
pessoa3.cadFim();
pessoa4.cadFim();

