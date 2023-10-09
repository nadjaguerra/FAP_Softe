const mysql = require("mysql2");
// Configurar conexão com o banco de dados MySQL
const db = mysql.createConnection({
 
  user: "root",
  password: "password",
  host: "localhost",
  database: "banco",
})
db.connect((e) => {
    if (e) {
      console.error('Erro :', e.message);
      return
    }
    console.log('Conexão com o banco de dados MySQL bem-sucedida!')
    db.end()
})
