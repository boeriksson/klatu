// local mockserver

const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 80

app.get('/', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    listDir('/')
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/dist/main.js', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    listDir('../dist')
    res.sendFile(path.join(__dirname + '/../dist/main.js'))
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