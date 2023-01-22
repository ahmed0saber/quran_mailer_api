const express = require("express")
const app = express()
var cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(require('body-parser').urlencoded({ extended: false }))
const axios = require('axios')

const subscribe = async (req) => {
    const response = await axios.post('http://54.242.5.95/subscribe/', req)

    return await response.data
}

const unsubscribe = async (req) => {
    const response = await axios.post(`http://54.242.5.95/unsubscribe/${req.id}/`, {})

    return await response.data
}

const contact = async (req) => {
    const response = await axios.post('http://54.242.5.95/contact/', req)

    return await response.data
}

app.post('/subscribe', async (req, res) => {
    const data = await subscribe(req.body)
    res.send(await data)
})

app.post('/unsubscribe', async (req, res) => {
    const data = await unsubscribe(req.body)
    res.send(await data)
})

app.post('/contact', async (req, res) => {
    const data = await contact(req.body)
    res.send(await data)
})

app.listen(8080, () => {
    console.log("server started..")
})
