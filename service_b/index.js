const express = require('express')
const app = express()
const request = require('request')
const port = 3002

app.get('/', (req, res) => {
  var response = 'Service B'

  request('http://localhost:3001/', { json: true }, (err, res, body) => {
    response = response + body
  })
  res.send(response)  
})

app.listen(port, () => {
  console.log(`Service B listening: http://localhost:${port}`)
})