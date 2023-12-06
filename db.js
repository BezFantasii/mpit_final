const Pool = require('pg').Pool
//Tyoma2008*!$Tyoma2008*!$
const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "node_postgres"
})

module.exports = pool