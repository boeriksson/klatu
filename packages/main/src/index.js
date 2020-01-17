import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'

function start() {
    ReactDOM.render(
        <Main/>,
        document.getElementById('app')
    )
}

window.onload = start
