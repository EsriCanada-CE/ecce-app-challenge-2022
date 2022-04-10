const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')


app.use(cors({
    origin: ['laptop-40fj7e65:3344', 'https:laptop-40fj7e65:3344','http:laptop-40fj7e65:3344']
}))
const queryToTwitter = require('./routes/queryToTwitter')
app.use('/queryToTwitter', queryToTwitter)
app.listen(3000, () => console.log('server started'))

