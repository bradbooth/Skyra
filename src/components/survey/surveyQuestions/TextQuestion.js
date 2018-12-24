import React from 'react'

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
        this.props.updateState(choice)
    }

    render() {
        return (
            <div>
                <h1>{this.props.question}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.props.options.map((item, i) => ( 
                        <SurveyLine
                            key={i}
                            value={item}
                            isChecked={this.props.selection == item}
                            onChange={this.handleChange}
                        />
                    ))}
                </form>   
            </div>
        )
    }
}


export default SurveyPage;
