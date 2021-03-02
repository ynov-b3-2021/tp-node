const express = require('express')
const app = express()
const fs = require('fs')

app.get('/books', (_req, res) => {
  fs.readFile(process.argv[3], (err, data) => {
    if (err) return res.sendStatus(500)
    res.json(JSON.parse(data))
  })
})

app.listen(process.argv[2])
