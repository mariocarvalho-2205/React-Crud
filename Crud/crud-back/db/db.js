const mysql = require('mysql2/promise');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'crud_react'
})

connection.connect((err) => {
    if(err) {
        console.error(`Erro ao conectar ${err.stack}`)
        return
    }
    console.log('connected as id ' + connection.threadId)
})

module.exports = connection