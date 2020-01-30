// local mockserver

const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const port = 80

app.use(cors())


function getShim(brand) {
    const defaultImports = {
        "react": "http://localhost:3002/react.js",
        "react-dom": "http://localhost:3002/react-dom.js",
        "topmenu": "http://localhost:3001/topmenu-comhem"
    }
    const comviqImports = {
        "topmenu": "http://localhost:3001/topmenu-comviq"
    }

    switch (brand) {
        case "comviq":
            return { "imports": { ...defaultImports, ...comviqImports }}
        default:
            return { "imports": defaultImports }
    }
}

app.get('/', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)

    res.json(getShim(req.query.brand))
})
app.get('/bundles/topMenuComhem.js', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)

    res.sendFile(path.join(__dirname + '/bundles/topMenuComhem.js'))
})
app.get('/bundles/topMenuComviq.js', (req, res) => {
    console.log('localServe Got a request - url: ', req.url)

    res.sendFile(path.join(__dirname + '/bundles/topMenuComviq.js'))
})

app.listen(port, () => console.log(`listening to port ${port}!`))
