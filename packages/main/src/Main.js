import React from 'react'
import Button from '@material-ui/core/Button'
import TopMenu from 'topmenu'

const Main = () => {
    console.log('I Main!!!')
    return (
        <div>
            <TopMenu/>
            Material button: <Button variant="contained" color="primary">Go</Button>
        </div>
    )
}

export default Main
