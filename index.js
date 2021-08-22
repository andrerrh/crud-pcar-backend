const express = require('express')
const api = require('./src/api')

const app = express()
const port = 3000

app.use(express.json())

app.get('/cars', (req, res) => api.get(req, res))
app.get('/cars/:id', (req, res) => api.getById(req, res))
app.post('/cars', (req, res) => api.add(req, res))
app.put('/cars/:id', (req, res) => api.update(req, res))
app.delete('/cars/:id', (req, res) => api.del(req, res))

app.listen(port, () => console.log(`Server running at port ${port}`))