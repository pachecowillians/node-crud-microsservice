const Pool = require('pg').Pool
const pool = new Pool({
    user: 'username',
    host: '172.17.0.1',
    database: 'default_database',
    password: 'password',
    port: 5432,
})

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
    deleteGeek,
}