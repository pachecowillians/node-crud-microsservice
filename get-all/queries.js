const Pool = require('pg').Pool
const pool = new Pool({
    user: 'username',
    host: '172.17.0.1',
    database: 'default_database',
    password: 'password',
    port: 5432,
})

const getGeeks = (request, response) => {
    pool.query('SELECT * FROM geeks ORDER BY id asc', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getGeeks,
}