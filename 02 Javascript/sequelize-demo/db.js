
//1 - configurações para a conexão com o banco de dados

const Sequelize = require('sequelize');
const sequelize = new Sequelize ('crud', 'root', '1234',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
} )

module.exports = sequelize;