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

    componentWillUnmount() {
        this.setState({
            isVisible: false
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
                <h1 className="text-center">What are your skin concerns?</h1>
                <form onSubmit={this.handleSubmit}>
                    <Row className="inputGroup">
                        <input
                            type="radio"
                            id="oily"
                            value="oily"
                            checked={this.props.surveyChoices.skintype === "oily"}
                            onChange={this.handleChange}/>
                        <label htmlFor="oily">Oily</label>
                    </Row>
    
                    <div className="inputGroup">
                        <input
                            type="radio"
                            id="dry"
                            value="dry"
                            checked={this.props.surveyChoices.skintype === "dry"}
                            onChange={this.handleChange}/>
                        <label htmlFor="dry">Dry</label>
                    </div>
                    
                    <div className="inputGroup">
                        <input
                            type="radio"
                            id="acne"
                            value="acne"
                            checked={this.props.surveyChoices.skintype === "acne"}
                            onChange={this.handleChange}/>
                        <label htmlFor="acne">Acne</label>
                    </div>
    
                    <div className="inputGroup">
                        <input
                            type="radio"
                            id="dullness"
                            value="dullness"
                            checked={this.props.surveyChoices.skintype === "dullness"}
                            onChange={this.handleChange}/>
                        <label htmlFor="dullness">Dullness</label>
                    </div>
                </form>
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