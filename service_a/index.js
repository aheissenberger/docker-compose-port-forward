const express = require('express')
const app = express()
const request = require('request')
const port = 3000

app.get('/', (req, res) => {
  var response = 'Service A'

  res.send(response)  
})

app.listen(port, () => {
  console.log(`Service A listening: http://localhost:${port}`)
})