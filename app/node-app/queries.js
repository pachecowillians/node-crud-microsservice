const Pool = require('pg').Pool
const pool = new Pool({
    user: 'username',
    host: '172.17.0.1',
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

const getGeekById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM geeks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createGeek = (request, response) => {
    const { name } = request.body

    pool.query('INSERT INTO geeks (name) VALUES ($1) RETURNING *', [name], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Geek added with ID: ${results.rows[0].id}`)
    })
}

const updateGeek = (request, response) => {
    const id = parseInt(request.params.id)
    const { name } = request.body

    pool.query(
        'UPDATE geeks SET name = $1 WHERE id = $2',
        [name, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Geek modified with ID: ${id}`)
        }
    )
}

const deleteGeek = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM geeks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Geek deleted with ID: ${id}`)
    })
}

module.exports = {
    getGeeks,
    getGeekById,
    createGeek,
    updateGeek,
    deleteGeek,
}