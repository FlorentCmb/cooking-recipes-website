// Librairies
const mysql = require('mysql')
const dotenv = require('dotenv')

// Dotenv settings
dotenv.config(process.cwd(), '.env')

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    multipleStatements: true
})

connection.connect(error => {
    if (!error) {
        console.log(`Successfully connected to the database '${process.env.DB_NAME}'.`)
    }
    else {
        console.log(error)
    }
})

module.exports = connection