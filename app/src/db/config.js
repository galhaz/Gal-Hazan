const dbConfig = require("./db.config")
const config = {
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
}
module.exports= config

