import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { history } from "../routers/AppRouter";
import { Grid, Row, Col } from 'react-bootstrap'
import SurveyStage1 from './Survey/surveyStage1'
import SurveyStage2 from './Survey/surveyStage2'
import SurveyStage3 from './Survey/surveyStage3'
import { TransitionGroup, CSSTransition  } from 'react-transition-group'

export class Survey extends React.Component {
    constructor() {
        super();

        this.handleNext = this.handleNext.bind(this);

        this.state = {
          stage: 1
        };
    }
    
    handleNext() {

        // TODO - temporary! I hope...
        if (this.props.surveyChoices.skintype && this.props.location.pathname === '/survey/1'){
            this.props.history.push('/survey/2')
        }
        if (this.props.surveyChoices.skintype && this.props.location.pathname === '/survey/2'){
            this.props.history.push('/survey/3')
        }
        if (this.props.surveyChoices.skintype && this.props.location.pathname === '/survey/3'){
            this.props.history.push('/home')
        }
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Route render={({ location }) => (
                        <div>
                            <Grid>
                                <Row>
                                    <Col className="SurveyStart" xs={12}>
                                        <Col xs={12} md={8} mdOffset={2}>
                                            <TransitionGroup className="transitionGroup">
                                                <CSSTransition
                                                key={location.key}
                                                timeout={500}
                                                classNames='fade'
                                                >
                                                <div className="surveyContainer">
                                                    <Switch location={location}>
                                                        <Route path="/survey/1" component={SurveyStage1} exact={true} />
                                                        <Route path="/survey/2" component={SurveyStage2} exact={true} />
                                                        <Route path="/survey/3" component={SurveyStage3} exact={true} />
                                                    </Switch>
                                                    <button className="button" onClick={this.handleNext}>Next</button>
                                                </div>
                                                </CSSTransition>
                                            </TransitionGroup>
                                        </Col>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    )}/>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    surveyChoices: state.survey
})

export default connect(mapStateToProps)(Survey)

