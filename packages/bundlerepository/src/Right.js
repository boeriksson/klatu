import React from 'react'
import YetAnother from 'yet-another'

class Right extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            trigger: false
        }
        this.getTrigger.bind(this)
    }

    handleClick = (e) => {
        this.setState({ trigger: true })
    }

    getTrigger() {
        return this.state.trigger ? <YetAnother/> : null
    }

    render() {
        return (<div style={{
                margin: '10px 0',
                backgroundColor: '#aaa',
                color: '#222',
                height: '200px'
            }}>Right comkvick <button onClick={this.handleClick}>Load yet another comp.</button>
                {this.getTrigger()}
            </div>
        )
    }
}

export default Right