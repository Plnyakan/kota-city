const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'pleasure749%',
    database: 'kotadb',
    host: 'localhost',
    port: 5432
})
console.log('Starting connection to database')
module.exports = pool;