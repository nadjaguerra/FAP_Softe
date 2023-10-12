// 2 - Esse é o modelo de dados. É o objeto que fará o mapeamento das colunas da tabela no banco de dados.

const Sequelize = require('sequelize');         // classe sequelize
const database = require('./db');              // objeto database

//mapeamento das colun
const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING

})

module.exports = Produto;