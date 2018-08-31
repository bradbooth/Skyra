import React from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'

export class SplashScreen extends React.Component {
// On componenet did mount -> push to homepage

    componentDidMount() {
        setTimeout( () => {
           this.props.history.push('/home')
        }, 5000);
    }

    render() {
        return (
            <div className="fadeOut">
                <Col className="splashScreenTitle text-center align-middle" >
                    <h1>SKÝRA</h1>
                </Col>
            </div>
        )
    }
}

export default connect()(SplashScreen)