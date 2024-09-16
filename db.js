var mysql = require('mysql2')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fatec",
    database: "crud"
})

con.connect(function(erro) {
    if (erro) throw erro
    console.log('Conectado!')

  /*con.query("CREATE DATABASE crud", function (erro, result) {
        if (erro) throw erro
        console.log("Banco de dados Criado!")
    }) */

  /*var sql = "CREATE TABLE clientes (id INT NOT NULL AUTO_INCREMENT," +
              "nome VARCHAR(255) NOT NULL, idade int NOT NULL, uf VARCHAR(20) NOT NULL, PRIMARY KEY(id))"

  /*con.query(sql, function (erro, result) {
        if (erro) throw erro
        console.log("Tabela criada")
    }) */


    var sql = "INSERT INTO clientes (id, nome, idade, uf) values (1, 'Sarah', 18, 'SP')";
    con.query(sql, function (erro, result){
        if (erro) throw erro
        console.log("Registro inserido") 
    })

})