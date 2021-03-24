// Librairies
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
// Routes
const api = require('./routes')

// Midware settings
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config()
app.use('/', api)

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.listen(process.env.DF_PORT, error => {
    if (!error) {
        console.log(`Server listening on port ${process.env.DF_PORT}`)
    }
    else {
        console.log("An error has occured.")
    }
})