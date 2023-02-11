const express = require('express')
const cors = require("cors")
const app = express()
app.use(cors())
const port = process.env.PORT || 3000

const apiData = require('./data.json')

app.get("/", (req, res) => {
    res.send("hello server is live")
})

app.get("/quizdata", (req, res) => {
    res.send(apiData)
})

app.listen(port, () => {
    console.log("server is live Again")
})