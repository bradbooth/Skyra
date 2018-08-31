import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Button } from 'react-bootstrap'

const SurveyStart = () => (
    <Grid>
        <Row>
            <Col className="SurveyStart" xs={10}>
                <h1>TAKE<br/>THE<br/>SURVEY</h1>
                <Button className="button" >START</Button>
            </Col>
        </Row>
    </Grid>
)

export default SurveyStart
