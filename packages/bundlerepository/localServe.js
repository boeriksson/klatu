// local mockserver

const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const port = 3003

app.use(cors())


function getShim(brand) {
    const defaultImports = {
        "react": "http://localhost:3002/react.js",
        "react-dom": "http://localhost:3002/react-dom.js",
        "topmenu": "http://localhost:3003/bundles/topMenuComhem.js",
        "random-widget": "http://localhost:3003/bundles/randomWidget.js"
    }
    const comviqImports = {
        "topmenu": "http://localhost:3003/bundles/topMenuComviq.js"
    }

    console.log('brand: ', brand)
    switch (brand) {
        case "comviq":
            return { "imports": { ...defaultImports, ...comviqImports }}
        default:
            return { "imports": defaultImports }
    }
}

app.get('/', (req, res) => {
    console.log(' Got a request - brand: ', JSON.stringify(req.query))
    res.json(getShim(req.query.brand))
})

app.get('/bundles/topMenuComhem.js', (req, res) => {
    console.log('topMenuComhem Got a request - url: ', req.url)

    res.sendFile(path.join(__dirname + '/serve/bundles/topMenuComhem.js'))
})
app.get('/bundles/topMenuComviq.js', (req, res) => {
    console.log('topMenuComviq Got a request - url: ', req.url)

    res.sendFile(path.join(__dirname + '/serve/bundles/topMenuComviq.js'))
})
app.get('/bundles/randomWidget.js', (req, res) => {
    console.log('topMenuComviq Got a request - url: ', req.url)

    res.sendFile(path.join(__dirname + '/serve/bundles/randomWidget.js'))
})

app.listen(port, () => console.log(`listening to port ${port}!`))
