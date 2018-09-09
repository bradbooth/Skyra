import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { history } from "../routers/AppRouter";
import { Grid, Row, Col } from 'react-bootstrap'
import Header from './Header'
import SurveyStage1 from './Survey/surveyStage1'
import SurveyStage2 from './Survey/surveyStage2'


export class Survey extends React.Component {
    constructor() {
        super();

        this.handleNext = this.handleNext.bind(this);

        this.state = {
          stage: 1
        };
    }
    
    handleNext() {
        console.log()
        if (this.props.surveyChoices.skintype && this.props.location.pathname === '/survey'){
            this.props.history.push('/survey/2')
        }
    }

    render() {
        return (
            <div>
                <Router history={history}>
                <div className="fadeIn">
                    <Header />
                        <Grid>
                            <Row>
                                <Col className="SurveyStart" xs={12}>
                                    <Col xs={12} md={8} mdOffset={2}>
                                        <Switch>
                                            <Route path="/survey" component={SurveyStage1} exact={true} />
                                            <Route path="/survey/2" component={SurveyStage2} exact={true} />
                                            <Route path="/survey/3" component={SurveyStage1} exact={true} />
                                        </Switch>
                                        <button className="button" onClick={this.handleNext}>Next</button>
                                    </Col>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    surveyChoices: state.survey
})

export default connect(mapStateToProps)(Survey)
