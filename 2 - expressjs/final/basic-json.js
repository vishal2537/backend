const express = require('express')
const app = express()
const { products } = require('../data')
const { people } = require("../data");


app.get('/', (req, res) => {
    res.json(products)
    // res.json(people)
})

app.listen(5000, () => {
    console.log('server is listening port 5000')
})