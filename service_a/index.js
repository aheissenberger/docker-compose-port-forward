const express = require('express')
const app = express()
const request = require('request')
const port = 3001

app.get('/', (req, res) => {
  var response = 'Service A'

  request('http://localhost:3002/', { json: true }, (err, res, body) => {
    response = response + body
  })
  res.send(response)  
})

app.listen(port, () => {
  console.log(`Service A listening: http://localhost:${port}`)
})