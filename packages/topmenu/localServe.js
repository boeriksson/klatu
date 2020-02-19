// local mockserver

const express = require('express')
var cors = require('cors')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3001

app.use(cors())

app.get('/topmenu', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    console.log('process.cwd()', process.cwd())
    console.log('__dirname ', __dirname)
    console.log('localpath: ', path.join(__dirname + '/serve/topMenu.js'))
    res.sendFile(path.join(__dirname + '/serve/topMenu.mjs'))
})

app.listen(port, () => console.log(`listening to port ${port}!`))