import React from 'react'
import { connect } from 'react-redux'
import { Row } from 'react-bootstrap'
import { updateSurveyChoices } from '../../actions/survey'
import { CSSTransition } from 'react-transition-group';

export class SurveyStage1 extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            isVisible: false
        }
    }

    componentDidMount() {
        this.setState({
            isVisible: true
        })
    }

    handleChange(event) {
        console.log(event.target.value)
        // this.props.handleNext()
        this.props.updateSurveyChoices({
          skintype: event.target.value
        });
    }

    render() {
        return (
            <div>
                <CSSTransition
                in={this.state.isVisible}
                timeout={900}
                classNames="background"
                unmountOnExit
                onExited={() => {
                    this.setState({
                    showValidationButton: true,
                    });
                }}>
                    <div>                
                        <h1 className="text-center">What kind of oil?</h1>
                        <form onSubmit={this.handleSubmit}>
                            <Row className="inputGroup">
                                <input
                                    type="radio"
                                    id="grapeseed"
                                    value="oily"
                                    checked={this.props.surveyChoices.skintype === "grapeseed"}
                                    onChange={this.handleChange}/>
                                <label htmlFor="grapeseed">Grapeseed</label>
                            </Row>
                        </form>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    surveyChoices: state.survey
})

const mapDispatchToProps = (dispatch) => ({
    updateSurveyChoices: (surveyChoices) => dispatch(updateSurveyChoices(surveyChoices))
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyStage1)