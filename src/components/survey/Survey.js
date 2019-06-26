import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Grid, Row, Col, Button } from "react-bootstrap";
import { startUpdateSkintype, 
        startUpdateSensitive,
        startUpdateActiontype, 
        startUpdateFragrancetype,
        startShowSurvey } from '../../actions/survey';
import TextQuestion from './surveyQuestions/TextQuestion'
import CircleQuestion from './surveyQuestions/CircleQuestion'
import ProductQuestion from './surveyQuestions/ProductQuestion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SurveyProgress from './SurveyProgress'

import surveyOptions from './surveyOptions.json'

const timeout = 800

const maxStages = Object.keys(surveyOptions).length + 1;

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

            this.setState({
                stage: this.state.stage - 1,
            })
        }
    }


    render() {

        const stages = {
            1: {updateStore: this.props.updateSkintype},
            2: {updateStore: this.props.updateSensitive},
            3: {updateStore: this.props.updateActiontype},
            4: {updateStore: this.props.updateFragrancetype}
        }

        
        return (
            <div className="survey-container">
                <TransitionGroup className="transitionGroup">
                    <CSSTransition
                        key={this.state.stage}
                        timeout={200}
                        classNames='fade'
                        
                    >
                        <Row className="survey-top-row">
                            <Col 
                                className={"survey-arrow-left-container" + (this.state.stage == 1 ? " disabled" : "")}
                                onClick={this.previous}>
                                <FontAwesomeIcon icon="arrow-left"/>
                            </Col>
                            <Col className="survey-options-container">
                                        {this.state.stage < 4 && 
                                            <CircleQuestion
                                                question={surveyOptions[this.state.stage].question}
                                                options={surveyOptions[this.state.stage].options}
                                                action={this.next}
                                                updateState={stages[this.state.stage].updateStore}
                                            />
                                        }
                                        {this.state.stage >= 4 && 
                                            <ProductQuestion />
                                        }
                            </Col>  
                        </Row>
                    </CSSTransition>
                </TransitionGroup>
                <Row className="justify-content-center">
                        <Col xs={10} className="survey-progress-bar-container">
                            <SurveyProgress 
                                maxStages = {maxStages}
                                stage = {this.state.stage}
                            />
                        </Col>
                </Row>
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
    updateSensitive: (bool) => dispatch(startUpdateSensitive(bool)),
    updateActiontype: (actionType) => dispatch(startUpdateActiontype(actionType)),
    updateFragrancetype: (fragranceType) => dispatch(startUpdateFragrancetype(fragranceType)),
    showSurvey: (bool) => dispatch(startShowSurvey(bool))

});

export default connect(mapStateToProps, mapDispatchToProps)(Survey);


// <Fade
//                                     className="surveyPage"
//                                     transistionIn={this.state.stage == 1}
//                                     children={
//                                         <CircleQuestion
//                                             question="This is the question."
//                                             options={["Oily", "Gross"]}
//                                             action={this.next}
//                                             updateState={this.props.updateSkintype}
//                                         />
//                                     }
//                                 />
//                                 <Fade
//                                     className="surveyPage"
//                                     transistionIn={this.state.stage == 2}
//                                     children={
//                                         <CircleQuestion
//                                             question="This is the next question."
//                                             options={new Array(5).fill(0)}
//                                             action={this.next}
//                                             updateState={this.props.updateActiontype}
//                                         />
//                                     }
//                                 />
//                                 <Fade
//                                     className="surveyPage"
//                                     transistionIn={this.state.stage == 3}
//                                     children={
//                                         <CircleQuestion
//                                             question="This is the final question."
//                                             options={new Array(8).fill(0)}
//                                             action={this.next}
//                                             updateState={this.props.updateFragrancetype}
//                                         />
//                                     }
//                                 />