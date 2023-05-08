const Pool = require('pg').Pool

require('dotenv').config()

const host = process.env.HOST;

const pool = new Pool({
    user: 'username',
    host: host,
    database: 'default_database',
    password: 'password',
    port: 5432,
})

const createGeek = (request, response) => {
    const { name } = request.body

    pool.query('INSERT INTO geeks (name) VALUES ($1) RETURNING *', [name], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Geek added with ID: ${results.rows[0].id}`)
    })
}

module.exports = {
    createGeek,
}