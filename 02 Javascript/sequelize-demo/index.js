// 3 - Utilizando o modelo que foi criado antes. 

(async () => {

    const database = require ('./db');
    const Produto = require ('./produto');           //carregando os modelos em memória 

    await database.sync();                           /*.sync vai verificar os modelos neste projetos com 
                                                        as tabelas no banco e garantir que existam ou estejam iguais*/
    const novoProduto = await Produto.create({
        id: 32,
        nome: 'Teclado',
        preco: 389,
        descricao: 'Teclado Mecânico'
 })
    console.log(novoProduto);

})();