import ReactDOM from 'react-dom'
import React from 'react'
import Main from './Main.js'

function start() {
    console.log('starting main index.js')
    ReactDOM.render(
        <Main/>,      // <div>Lena och Dennis är onda...</div>,
        document.getElementById('app')
    )
}

start()
