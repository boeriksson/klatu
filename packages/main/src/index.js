import ReactDOM from 'react-dom'
import React from 'react'

function start() {
    console.log('starting main index.js')
    ReactDOM.render(
        <div>Lena & Dennis</div>,
        document.getElementById('app')
    )
}

window.onload = start
