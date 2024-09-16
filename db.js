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

    con.query("CREATE DATABASE crud", function (erro, result) {
        if (erro) throw erro
        console.log("Banco de dados Criado!")
    }) 
})