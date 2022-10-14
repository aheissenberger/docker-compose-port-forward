const express = require('express')
const app = express()
const request = require('request')
const port = 3000

app.get('/', (req, res) => {
  var response = 'Service B'

  res.send(response)  
})

app.listen(port, () => {
  console.log(`Service B listening: http://localhost:${port}`)
})