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

    // criar database 
    /*
    con.query("CREATE DATABASE crud", function (erro, result) {
        if (erro) throw erro
        console.log("Banco de dados Criado!")
    }) 
    */

    // criar tabela
    /*
    var sql = "CREATE TABLE clientes (id INT NOT NULL AUTO_INCREMENT," +
              "nome VARCHAR(255) NOT NULL, idade int NOT NULL, uf VARCHAR(20) NOT NULL, PRIMARY KEY(id))"

    /*
    con.query(sql, function (erro, result) {
        if (erro) throw erro
        console.log("Tabela criada")
    }) 
    */

    // inserir dados
    /*
    var sql = "INSERT INTO clientes (id, nome, idade, uf) values (1, 'Sarah', 18, 'SP')";
    con.query(sql, function (erro, result){
        if (erro) throw erro
        console.log("Registro inserido") 
    })
    */

    // fazer uma consulta
    // pode usar filtros com where, ou ordenar o resultado com order by
    /*
    con.query("SELECT * FROM clientes", function (erro, result, fields){
        if (erro) throw erro
        console.log(result)
    })
    */

    // deletar registro
    var sql = "DELETE FROM clientes WHERE nome = 'Sarah'"
    con.query(sql, function (erro, result){
        if (erro) throw erro
        console.log("Registro deletado!" + result.affectedRows)
    })

})