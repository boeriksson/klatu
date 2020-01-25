import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'

function start() {
    console.log('starting main index.js')
    ReactDOM.render(
        <Main/>,
        document.getElementById('app')
    )
}

window.onload = start
