import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition  } from 'react-transition-group'
import { Grid, Row, Col, Button } from "react-bootstrap";
import { startUpdateSkintype, startUpdateActiontype, startUpdateFragrancetype, startShowSurvey } from '../../actions/survey';
import TextQuestion from './surveyQuestions/TextQuestion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SurveyProgress from './SurveyProgress'

import surveyOptions from './surveyOptions.json'

const timeout = 800
const slideInFromRight = "slide-in-right"
const slideInFromLeft = "slide-in-left"
let animation = "slide-in-right"

const maxStages = Object.keys(surveyOptions).length;

const Slide = ({transistionIn, children}) => (
    <CSSTransition
    in={transistionIn}
    timeout={timeout}
    classNames={animation}
    unmountOnExit
    >
        <Col xs={10} md={4} className="surveyPage">
            {children}    
        </Col>
    </CSSTransition> 
)

export class Survey extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           stage: 1,
           nextOption: 'Next'
        };
    }

    next = () => {
        if(this.state.stage < maxStages){
            animation = slideInFromRight
            this.setState({
                stage: this.state.stage + 1,
            })
        } else {
            this.props.showSurvey(false)
        }
    }

    previous = () => {
        //TODO - Add protection
        if(this.state.stage > 1){
            this.setState({
                nextOption: 'Next'
            })

            animation = slideInFromLeft
            this.setState({
                stage: this.state.stage - 1,
            })
        }
    }


    render() {

        return (
            <div className="survey-container">
                <div className="survey-top-row">
                    <div className="survey-options-container">
                        <Slide
                            className="surveyPage"
                            transistionIn={this.state.stage == 1}
                            children={
                                <TextQuestion 
                                    question={surveyOptions.skintype.question}
                                    options={surveyOptions.skintype.options}
                                    selection={this.props.skintype}
                                    updateState={this.props.updateSkintype}
                                />
                            }
                        />
                        <Slide
                            className="surveyPage"
                            transistionIn={this.state.stage == 2}
                            children={
                                <TextQuestion 
                                    question={surveyOptions.actiontype.question}
                                    options={surveyOptions.actiontype.options}
                                    selection={this.props.actiontype}
                                    updateState={this.props.updateActiontype}
                                />
                            }
                        />
                        <Slide
                            className="surveyPage"
                            transistionIn={this.state.stage == 3}
                            children={
                                <TextQuestion 
                                    question={surveyOptions.fragrancetype.question}
                                    options={surveyOptions.fragrancetype.options}
                                    selection={this.props.fragrancetype}
                                    updateState={this.props.updateFragrancetype}
                                />
                            }
                        />
                    </div>  
                </div>
                <div className="survey-bottom-row">
                    <Row >
                        <Col xs={8} xsOffset={2} md={8} mdOffset={2} className="survey-progress-bar-container">
                            <SurveyProgress 
                                maxStages = {maxStages}
                                stage = {this.state.stage}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col  className="survey-bottom-buttons-container">
                            <Button className="button survey-next-stage-button" onClick={this.previous} disabled={this.state.stage == 1}>Previous</Button>
                            <Button 
                                className="button survey-next-stage-button" 
                                onClick={this.next}>
                                {this.state.stage == maxStages ? 'Finish' : 'Next'}
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        skintype: state.survey.skintype,
        actiontype: state.survey.actiontype,
        fragrancetype: state.survey.fragrancetype
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateSkintype: (skinType) => dispatch(startUpdateSkintype(skinType)),
    updateActiontype: (actionType) => dispatch(startUpdateActiontype(actionType)),
    updateFragrancetype: (fragranceType) => dispatch(startUpdateFragrancetype(fragranceType)),
    showSurvey: (bool) => dispatch(startShowSurvey(bool))

});

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
