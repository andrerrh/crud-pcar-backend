const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const { pool, methods } = require('./database')

async function get(req, res) {
    const data = await pool.query(methods.select())
    res.send(data.rows)
}

async function getById(req, res) {
    const id = req.params.id
    const data = await pool.query(methods.selectById(id))
    res.send(data.rows)
}

async function add(req, res) {
    const data = Object.values(req.body)
    await pool.query(methods.insert(), data)
    res.send("Successfully added")
}

async function del(req, res) {
    const id = req.params.id
    await pool.query(methods.del(id))
    res.send('Successfully deleted')
}

async function update(req, res) {
    const id = req.params.id
    const data = Object.values(req.body)
    await pool.query(methods.put(id), data)
    res.send("Item successfully updated")
}

module.exports = { get, add, del, getById, update}