import React from 'react'
import { Grid, Row, Col, Button, ProgressBar } from "react-bootstrap";

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

export class TextQuestion extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const choice = event.target.value
        this.props.updateState(choice)
    }

    render() {

        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <h1 className="survey-question">{this.props.question}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <img src={
                            this.props.options.find(
                                x => x.title == this.props.selection
                            ).image
                        } alt=""/>
                    </Col>
                    <Col xs={8}>
                        <h3 className="survey-item-description">{
                            this.props.options.find(
                                x => x.title == this.props.selection
                            ).title
                        }</h3>
                        <p className="survey-item-description">{
                            this.props.options.find(
                                x => x.title == this.props.selection
                            ).description
                        }</p>
                    </Col>
                </Row>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {this.props.options.map((item, i) => ( 
                            <SurveyLine
                                key={i}
                                value={item.title}
                                isChecked={this.props.selection == item.title}
                                onChange={this.handleChange}
                            />
                        ))}
                    </form>   
                </div>
            </div>
        )
    }
}


export default TextQuestion;
