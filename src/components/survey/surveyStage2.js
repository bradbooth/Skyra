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
            surveyOptions : [
                "grapseed", "coconut"
            ]
        }
    }

    handleChange(event) {
        this.props.updateSurveyChoices({
          skintype: event.target.value
        });
    }

    render() {
        return (
            <div>

                    <div>                
                        <h1 className="text-center">This is survey question number 2.</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="inputGroup">
                                <input
                                    type="radio"
                                    id="grapeseed"
                                    value="grapeseed"
                                    checked={this.props.surveyChoices.skintype === "grapeseed"}
                                    onChange={this.handleChange}/>
                                <label htmlFor="grapeseed">Grapeseed</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(SurveyStage1)