import React from 'react'
import { connect } from 'react-redux'
import { startUpdateSkintype } from '../../../actions/survey';
import { Grid, Row, Col, Button } from "react-bootstrap";


const SurveyLine = ({value, isChecked, onChange}) => (
    <div className="inputGroup">
        <input
            type="radio"
            id={value}
            value={value}
            checked={isChecked}
            onChange={onChange}
        />
        <label htmlFor={value}>{value}</label>
    </div>
)

export class SurveyPage extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const choice = event.target.value
        this.props.updateSkintype(choice)
    }

    render() {

        let choices = ['Normal', 'Dry', 'Combination']

        return (
            <div>
                <Grid>
                    <Row>
                        <h1>What is your skintype?</h1>
                        <form onSubmit={this.handleSubmit}>
                            {choices.map((item, i) => ( 
                                <SurveyLine
                                    key={i}
                                    value={item}
                                    isChecked={this.props.skintype == item}
                                    onChange={this.handleChange}
                                />
                            ))}
                        </form>   
                    </Row>
                </Grid>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage);
