import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import Header from './Header'
import SurveyStage1 from './Survey/surveyStage1'


export class Survey extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);

        this.state = {
          skintype: ''
        };
    }

    handleChange(event) {
        console.log(event.target.value)
        this.props.updateSurveyChoices({
          skintype: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(`You chose ${this.state.skintype}`);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="fadeIn">
                    <Grid>
                        <Row>
                            <Col className="SurveyStart" xs={12}>
                                <h1 className="text-center">What are your skin concerns?</h1>
                                <Col xs={12} md={8} mdOffset={2}>
                                    <SurveyStage1/>
                                    <button className="button" type="submit">Next</button>
                                </Col>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Survey
