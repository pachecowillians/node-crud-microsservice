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

module.exports = {
    updateGeek,
}