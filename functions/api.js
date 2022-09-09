const express = require("express")
const app = express()
const serverless = require('serverless-http')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        'path': 'home',
        'firstName': 'Suryanshu',
        'job': 'Developer'
    })
})

router.get("/json", (req, res) => {
    res.json({
        'path': 'json',
        'firstName': 'Sahil',
        'job': 'Developer'
    })
})

app.use('/', router)
module.exports.handler = serverless(app)