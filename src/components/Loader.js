import React from 'react'
import { connect } from 'react-redux'
import { Spinner, Container, Row, Col } from 'react-bootstrap'

export class Loader extends React.Component {
// On componenet did mount -> push to homepage

    componentDidMount() {
        this.props.func &&
        setTimeout( () => {
           this.props.func()
        }, this.props.timeout || 5000);
    }

    render() {
        return (
            <div className="fadeOut d-flex h-100">
                <Container className="align-self-center">
                    <Row>
                        <Col xs={12}>
                            <Spinner className="" animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </Col>
                        <Col>
                            <p>{this.props.message}</p>
                        </Col>
                    </Row>

                </Container>
               
               
            </div>
        )
    }
}

export default connect()(Loader)