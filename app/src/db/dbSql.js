const mysql = require("mysql2")
const dbConfig= require("./config")
const dbConnection = mysql.createConnection(dbConfig)
dbConnection.connect(error=>{
    if(error) {
        console.log("cannot connecet to DB ",error)
        throw error;
    }
    console.log("Successfuly connected to the database")
})
module.exports = dbConnection;