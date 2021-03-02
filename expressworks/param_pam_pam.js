const express = require('express')
const app = express()

app.put('/message/:id', (req, res) => {	
  const { id } = req.params

  const computeSha1 = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')

  res.send(computeSha1)
})  

app.listen(process.argv[2])
