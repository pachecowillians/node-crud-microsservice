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
const getGeekById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM geeks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getGeekById,
}