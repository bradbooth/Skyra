import React from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'

export class SplashScreen extends React.Component {

    render() {
        return (
            <div className="splashScreen">
                <Col className="splashScreenTitle text-center align-middle" >
                    <h1>SKÝRA</h1>
                </Col>
            </div>
        )
    }
}

export default connect()(SplashScreen)