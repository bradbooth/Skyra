import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Row, Col, Container } from "react-bootstrap";
import { startUpdateSkintype, 
        startUpdateSensitive,
        startUpdateActiontype, 
        startUpdateFragrancetype,
        startUpdateExfoliatortype,
        startShowSurvey } from '../../actions/survey';
import { startUpdateColour } from '../../actions/variant';
import CircleQuestion from './surveyQuestions/CircleQuestion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SurveyProgress from './SurveyProgress'
import surveyOptions from './surveyOptions.json'
import Loader from '../Loader' 

const timeout = 800

const maxStages = Object.keys(surveyOptions).length;

export class Survey extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           stage: 0,
           nextOption: 'Next'
        };
    }

    // Go to the next stage
    next = () => {
        if(this.state.stage < maxStages){
            this.setState({
                stage: this.state.stage + 1,
            })
        } else {
            this.props.history.push('/product')
            this.props.showSurvey(false)
        }
    }

    // Go to the previous stage
    previous = () => {
        if(this.state.stage > 0){
            this.setState({
                nextOption: 'Next'
            })

            this.setState({
                stage: this.state.stage - 1,
            })
        }
    }

    // Move directly to given stage
    setStage = (stage) => {
        this.setState({
            stage
        })
    }


    render() {
        
        const stages = {
            0: {updateStore: this.props.updateSkintype},
            1: {updateStore: this.props.updateSensitive},
            2: {updateStore: this.props.updateActiontype},
            3: {updateStore: this.props.updateFragrancetype},
            4: {updateStore: this.props.updateExfoliator},
            5: {updateStore: this.props.updateColour}
        }

        return (
            <div className="survey-container">
                <Container>
                    <Row>
                        {/* Ensure arrow is only shown when survey is avaliable */}
                        {this.state.stage < maxStages && 
                            <Col xs={2}
                                className={"survey-arrow-left-container" + (this.state.stage == 0 || this.state.stage >= maxStages ? " disabled" : "")}
                                onClick={this.previous}>
                                <FontAwesomeIcon icon="arrow-left"/>
                            </Col>
                        }
                    </Row>
                    <Row className="survey-top-row justify-content-center">
                        <TransitionGroup className="transitionGroup">
                            <CSSTransition
                                key={this.state.stage}
                                timeout={timeout}
                                classNames='fade'
                                
                            >
                                <Col className="survey-options-container h-100">
                                    {/* Ensure survey is only shown while not complete */}
                                    {this.state.stage < maxStages && 
                                        <CircleQuestion
                                            question={surveyOptions[this.state.stage].question}
                                            options={surveyOptions[this.state.stage].options}
                                            action={this.next}
                                            updateState={stages[this.state.stage].updateStore}
                                        />
                                    }
                                    {/* Show loading icon on survey completion */}
                                    {this.state.stage >= maxStages && 
                                        <Loader 
                                            className="align-middle" 
                                            message={`Creating your custom face mask`}
                                            func={this.next}
                                            timeout={5000}/>
                                    }
                                </Col>  
                            </CSSTransition>
                        </TransitionGroup>
                    </Row>

                    <Row className="survey-bottom-row justify-content-center align-items-end">
                        <Col xs={10} className="survey-progress-bar-container">
                            {this.state.stage < maxStages &&
                            <SurveyProgress 
                                maxStages = {maxStages}
                                stage = {this.state.stage}
                                setStage = {this.setStage}
                            />}
                        </Col>
                    </Row>
                </Container>

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
    updateExfoliator: (exfoliator) => dispatch(startUpdateExfoliatortype(exfoliator)),
    updateColour: (colour) => dispatch(startUpdateColour(colour)),
    showSurvey: (bool) => dispatch(startShowSurvey(bool))

});

export default connect(mapStateToProps, mapDispatchToProps)(Survey);