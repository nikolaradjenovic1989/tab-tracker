// app dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// build express server
const app = express()

// for printing logs in server console, option chosen is string of combined
app.use(morgan('combined'))

// to easily parse any JSON request
app.use(bodyParser.json())

// allows any client to access this server (possible security issue)
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  })
})

app.listen(process.env.PORT || 8081)
