import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import Radium from 'radium'
import {changeTitle} from '../../actions'

@connect(state => state)
@Radium
class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(changeTitle('green-ci'))
    }
    render () {
        return (
            <div style={[styles.base, styles.larger]}>Hello {this.props.title}</div>
        )
    }
}

const styles = {
    base: {
        color: 'red'
    },
    larger: {
        fontSize: 20
    }
}

export default App