import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import Header from './Header'

export class Survey extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="fadeIn">
                    <Grid>
                        <Row>
                            <Col className="SurveyStart" xs={10}>
                                <h1>SURVEY</h1>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Survey
