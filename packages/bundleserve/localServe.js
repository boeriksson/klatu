// local mockserver

const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const fs = require('fs')
const port = 3002

app.use(cors())

app.get('/react.js', (req, res) => {
    console.log('bundlestore Got a request - url: ', req.url)
    res.set('Content-Type', 'text/javascript')
    res.sendFile(path.join(__dirname + '/serve/react.js'))
})

app.get('/react-dom.js', (req, res) => {
    console.log('bundlestore Got a request - url: ', req.url)
    res.set('Content-Type', 'text/javascript')
    res.sendFile(path.join(__dirname + '/serve/react-dom.js'))
})

/*
app.get('/styled-components.js', (req, res) => {
    console.log('bundlestore Got a request - url: ', req.url)
    res.set('Content-Type', 'text/javascript')
    res.sendFile(path.join(__dirname + '/serve/styled-components.esm.js'))
})

 */

app.get('/react-mine.js', (req, res) => {
    console.log('bundlestore Got a request - url: ', req.url)
    res.set('Content-Type', 'text/javascript')
    res.sendFile(path.join(__dirname + '/serve/react-mine.js'))
})

app.get('/react-dom-mine.js', (req, res) => {
    console.log('bundlestore Got a request - url: ', req.url)
    res.set('Content-Type', 'text/javascript')
    res.sendFile(path.join(__dirname + '/serve/react-dom-mine.js'))
})

app.listen(port, () => console.log(`listening to port ${port}!`))

/*
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
*/