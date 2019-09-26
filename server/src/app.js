// app dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

// build express server
const app = express()

// for printing logs in server console, option chosen is string of combined
app.use(morgan('combined'))

// to easily parse any JSON request
app.use(bodyParser.json())

// allows any client to access this server (possible security issue)
app.use(cors())

require('./routes')(app)
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on ${config.port}`)
  })
