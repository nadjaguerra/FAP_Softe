const { Sequelize, DataTypes } = require('sequelize');

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize('produto', 'livr', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

// Definição do modelo "Produto"
const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Sincronização do modelo com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Modelo "Produto" sincronizado com o banco de dados.');

    // Criação de um livro da Elena Ferrante
    return Produto.create({
      nome: 'A Vida Mentirosa dos Adultos',
      preco: 34.99,
      descricao: 'Livro escrito por Elena Ferrante.',
    });
  })
  .then((livro) => {
    console.log('Livro criado:', livro.toJSON());

    // Leitura do livro
    return Produto.findOne({ where: { nome: 'A Vida Mentirosa dos Adultos' } });
  })
  .then((livroEncontrado) => {
    console.log('Livro encontrado:', livroEncontrado.toJSON());

    // Atualização do preço do livro
    return Produto.update(
      { preco: 29.99 },
      { where: { nome: 'A Vida Mentirosa dos Adultos' } }
    );
  })
  .then(([rowsUpdated]) => {
    if (rowsUpdated > 0) {
      console.log('Preço do livro atualizado com sucesso.');
    } else {
      console.log('Livro não encontrado para atualização.');
    }

    // Remoção do livro
    return Produto.destroy({ where: { nome: 'A Vida Mentirosa dos Adultos' } });
  })
  .then((livroRemovido) => {
    if (livroRemovido > 0) {
      console.log('Livro removido com sucesso.');
    } else {
      console.log('Livro não encontrado para remoção.');
    }
  })
  .catch((error) => {
    console.error('Erro:', error.message);
  })
  .finally(() => {
    // Fechar a conexão com o banco de dados
    sequelize.close();
  });
