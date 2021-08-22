const Pool = require('pg').Pool

const pool = new Pool({
    user: 'lumhpbrlpuiymx',
    password: '7e35082ecf2b852caf72e91b4167e26eb85f57b581b8edbd0ceb655e8cb53a22',
    host: 'ec2-52-203-74-38.compute-1.amazonaws.com',
    database: 'ded8i7mou998je',
    port: 5432,
    ssl: {rejectUnauthorized: false}
})

const methods = {
    select: () => `SELECT * FROM cars`,
    selectById: (id) => `SELECT * FROM cars WHERE ID = ${id}`,
    insert: () => `INSERT INTO cars (model, year, hp) VALUES($1, $2, $3)`,
    put: (id) => `UPDATE cars SET model = $1, year = $2, hp = $3 WHERE ID = ${id}`,
    del: (id) => `DELETE FROM cars WHERE id = ${id}`
}

module.exports = { pool, methods }


// const SQL = `
//     CREATE TABLE IF NOT EXISTS cars (
//         ID serial PRIMARY KEY AUTO_INCREMENT,
//         model varchar(200) NOT NULL,
//         year smallint,
//         hp smallint
//     )
// `

// const SQL = `
//     INSERT INTO cars
//     VALUES(1, 'Civic', 2020, 158)
// `

// pool.query('SELECT * FROM cars',(err, res) => {
//     if(err) {
//         console.log(err)
//     } else if(res) {
//         console.log("Successfully executed")
//     }
//     pool.end()
// })