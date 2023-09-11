/*
Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações,
alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.
*/

function criarLista(pergunta, tamanho) {
    const lista = [];
    for (let i = 0; i < tamanho; i++) {
        const valor = prompt(`${pergunta} ${i + 1}: `);
        lista.push(valor);
    }
    return lista;
}

function modificarLista(lista, tipo) {
    const posicao = parseInt(prompt(`Qual posição da lista você deseja alterar (1 a ${lista.length})? `)) - 1;

    if (posicao < 0 || posicao >= lista.length) {
        console.log(`Posição inválida. A lista de ${tipo} contém ${lista.length} elementos.`);
        return;
    }

    const novoValor = prompt(`Digite o novo valor para ${tipo}:`);
    lista[posicao] = novoValor;
    console.log(`Nova lista de ${tipo}: ${lista}`);
}

let nomes = criarLista("Digite o nome", 10);
let idades = criarLista("Digite a idade", 10);
let coresFavoritas = criarLista("Digite a cor favorita", 10);

console.log(`Listas originais:
Nomes: ${nomes}
Idades: ${idades}
Cores Favoritas: ${coresFavoritas}`);

let alterar = prompt('Deseja alterar algo na lista? (sim ou não)').toLowerCase();

while (alterar === 'sim') {
    const opcao = parseInt(prompt(`O que deseja alterar?
    1- Nome
    2- Idade
    3- Cor \n`));

    if (opcao < 1 || opcao > 3) {
        console.log('Opção inválida.');
    } else {
        if (opcao === 1) {
            modificarLista(nomes, 'nomes');
        } else if (opcao === 2) {
            modificarLista(idades, 'idades');
        } else if (opcao === 3) {
            modificarLista(coresFavoritas, 'cores favoritas');
        }
    }

    alterar = prompt('Deseja alterar algo na lista? (sim ou não)').toLowerCase()
}

console.log(`Listas Modificadas:
Nomes: ${nomes}
Idades: ${idades}
Cores Favoritas: ${coresFavoritas}`)

