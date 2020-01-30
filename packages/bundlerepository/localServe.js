// local mockserver

const express = require('express')
var cors = require('cors')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 80

app.use(cors())

app.get('/topmenu', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)
    listDir('./serve')
    console.log('process.cwd()', process.cwd())
    console.log('__dirname ', __dirname)
    console.log('localpath: ', path.join(__dirname + '/serve/topMenu.js'))
    res.sendFile(path.join(__dirname + '/serve/topMenu.mjs'))
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