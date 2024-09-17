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
    /*
    var sql = "DELETE FROM clientes WHERE nome = 'Sarah'"
    con.query(sql, function (erro, result){
        if (erro) throw erro
        console.log("Registro deletado!" + result.affectedRows)
    })
    */

    // para excluir a tabela
    // DROP TABLE clientes

    // para atualizar registros na tabela
    // UPDATE clientes SET nome = 'Luiz Claudio' WHERE nome = 'Claudio'

    // limitar o número de regitros exibidos na consulta 
    // SELECT * FROM clientes LIMIT 5

    // combinar linhas de duas ou mais tabelascom base em uma coluna
    /*
    var sql = "CREATE TABLE pedidos (id INT PRIMARY KEY, cliente_id INT, produto VARCHAR(100), quantidade INT, valor_unitario DECIMAL(10, 2), FOREIGN KEY (cliente_id) REFERENCES clientes(id))"

    con.query(sql, function (erro, result) {
        if (erro) throw erro
        console.log("Tabela criada")
    }) 
    */

    // fazer a ligação com join
    /*
    var sql = "SELECT c.nome, p.produto, p.quantidade, p.valor_unitario FROM clientes c INNER JOIN pedidos p ON c.id = p.cliente_id"
    con.query(sql, function (erro, result) {
        if (erro) throw erro
        console.log("Combinação feita!")
        console.log(result)
    }) */
   
    
    // Criar tabela de fornecedores
    /*
    var sqlFornecedor = "CREATE TABLE IF NOT EXISTS Fornecedor (" +
    "id INT NOT NULL AUTO_INCREMENT, " +
    "nome VARCHAR(255) NOT NULL, " +
    "PRIMARY KEY(id))"

    con.query(sqlFornecedor, function(erro, result) {
        if (erro) throw erro
        console.log("Tabela Fornecedor criada!")
    });
    */


    /*
    // Criar tabela de produtos
    var sqlProduto = "CREATE TABLE IF NOT EXISTS Produto (" +
    "id INT NOT NULL AUTO_INCREMENT, " +
    "nome VARCHAR(255) NOT NULL, " +
    "preco DECIMAL(10, 2) NOT NULL, " +
    "fornecedor_id INT, " +
    "PRIMARY KEY(id), " +
    "FOREIGN KEY (fornecedor_id) REFERENCES Fornecedor(id))"

    con.query(sqlProduto, function(erro, result) {
        if (erro) throw erro
        console.log("Tabela Produto criada!")
    }) 
    
    */

    // Contar quantos produtos cada fornecedor fornece
    var sqlCountProducts = "SELECT f.nome AS fornecedor, COUNT(p.id) AS total_produtos " +
        "FROM Fornecedor f " +
        "LEFT JOIN Produto p ON f.id = p.fornecedor_id " +
        "GROUP BY f.id"
    
    con.query(sqlCountProducts, function(erro, result) {
        if (erro) throw erro;
        console.log("Total de produtos por fornecedor:")
        console.log(result)
    });

})