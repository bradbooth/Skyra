import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition  } from 'react-transition-group'
import { Grid, Row, Col, Button } from "react-bootstrap";
import { startUpdateSkintype } from '../../actions/survey';

import TextQuestion from './surveyQuestions/TextQuestion'

const timeout = 800
const slideInFromRight = "slide-in-right"
const slideInFromLeft = "slide-in-left"
let animation = "slide-in-right"

const Slide = ({transistionIn, children}) => (
    <CSSTransition
    in={transistionIn}
    timeout={800}
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
           stage: 0
        };
    }

    next = () => {
        //TODO - Add protection
        animation = slideInFromRight
        this.setState({
            stage: this.state.stage + 1,
        })
    }

    previous = () => {
        //TODO - Add protection
        animation = slideInFromLeft
        this.setState({
            stage: this.state.stage - 1,
        })
    }

    render() {

        return (
            <div>
                <div className="surveyContainer">
                    <Slide
                        transistionIn={this.state.stage == 0}
                        children={
                            <TextQuestion 
                                question="What is your first choice?"
                                options={["1", "2", "3"]}
                                selection={this.props.skintype}
                                updateState={this.props.updateSkintype}
                            />
                        }
                    />
                    <Slide
                        transistionIn={this.state.stage == 1}
                        children={
                            <TextQuestion 
                                question="What is your other choice?"
                                options={["4", "5", "6"]}
                                selection={this.props.skintype}
                                updateState={this.props.updateSkintype}
                            />
                        }
                    />
                </div>
                <Button onClick={this.previous}>Previous</Button>
                <Button onClick={this.next}>Next</Button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        skintype: state.survey.skintype
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateSkintype: (skinType) => dispatch(startUpdateSkintype(skinType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
