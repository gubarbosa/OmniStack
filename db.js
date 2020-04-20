const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {

    // Criar a tabela
    db.run("")
    // Inserir dados na tabela

    // Consultar dados na tabela

    // Deletar um dado da tabela

})