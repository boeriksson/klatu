import React from 'react'
//import Button from '@material-ui/core/Button' // <Button variant="contained" color="primary">Go</Button>
import TopMenu from 'topmenu'
import Right from 'right'
import Left from 'left'


const Main = () => {
    console.log('I Main!!!')

    return (
        <div className={'mainContainer'}>
            <TopMenu/>
            <div className={'mid'}>
                <div className={'midLeft'}><Left/></div>
                <div className={'midRight'}>
                    <Right/>
                </div>
            </div>
        </div>
    )
}

export default Main
