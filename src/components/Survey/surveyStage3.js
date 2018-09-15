import React from 'react'
import { connect } from 'react-redux'
import { Row } from 'react-bootstrap'
import { updateSurveyChoices } from '../../actions/survey'
import { CSSTransition } from 'react-transition-group';

export class SurveyStage3 extends React.Component {

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
                    <div>                
                        <h1 className="text-center">Third Page?</h1>
                        <form onSubmit={this.handleSubmit}>
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

export default connect(mapStateToProps, mapDispatchToProps)(SurveyStage3)