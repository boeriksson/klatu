// local mockserver

const express = require('express')
const request = require('request')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000

app.use(cors())

app.use(express.static('public'))
/*
app.get('/', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    res.sendFile(path.join(__dirname + '/build/index.html'))
})
*/
app.get('/', (req, response) => {
    console.log('localServe Got a request - url: ', req.url)
    const template = fs.readFileSync(path.join(__dirname + '/build/index.html'), "utf8")

    request('http://localhost:3003?brand=' + req.query.brand, { json: true }, (err, res, body) => {
        if (err) { return console.log(err) }
        const htmlResult = template.substring(0, template.indexOf('{{importshim}}'))
            + JSON.stringify(body)
            + template.substring(template.indexOf('{{importshim}}') + 14)
        response.send(htmlResult)
    })
})

app.get('/main.mjs', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    res.sendFile(path.join(__dirname + '/serve/main.mjs'))
})

app.get('/style.css', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    res.sendFile(path.join(__dirname + '/serve/style.css'))
})

app.get('/es-module-shims.js', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    res.sendFile(path.join(__dirname + '/node_modules/es-module-shims/dist/es-module-shims.js'))
})

app.listen(port, () => console.log(`listening to port ${port}!`))
