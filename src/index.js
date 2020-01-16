import React from 'react'
import ReactDOM from 'react-dom'
import Main from './main/Main'

function start() {
    ReactDOM.render(
        <Main/>,
        document.getElementById('app')
    )
}

window.onload = start
