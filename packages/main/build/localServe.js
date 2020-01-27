// local mockserver

const express = require('express')
var cors = require('cors')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 80

app.use(cors())

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    listDir('/')
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/main.mjs', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    listDir('.')
    res.sendFile(path.join(__dirname + '/main.mjs'))
})

app.get('/es-module-shims.js', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    listDir('./serve')
    res.sendFile(path.join(__dirname + '/es-module-shims.js'))
})

app.get('/system.js', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    res.sendFile(path.join(__dirname + '/system.js'))
})

app.get('/test.js', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    res.sendFile(path.join(__dirname + '/test.js'))
})

app.listen(port, () => console.log(`listening to port ${port}!`))

function listDir(dir) {
    const directoryPath = path.join(__dirname, dir)
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file);
        });
    });
}