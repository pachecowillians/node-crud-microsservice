const Pool = require('pg').Pool

require('dotenv').config()

const host = process.env.HOST;

const pool = new Pool({
    user: 'username',
    host: host,
    database: 'db_api',
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