import React from 'react'
import { Grid, Row, Col, Button, ProgressBar } from "react-bootstrap";




const Circle = ({title, background, action, updateState}) => {

    var circleStyle = {
        backgroundImage: `url(${background})`
    };

    return (
        <div>
            <div 
                className="circle"
                style={circleStyle}
                onClick={ () => {
                        action();
                        updateState(title);
                    }
                }
            >
            </div>
            <h3>{title}</h3>
        </div>
    )
}





export class CircleQuestion extends React.Component {

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
                <div className="circle-question-title-container">
                    <h1>{this.props.question}</h1>
                </div>
                <div className="circle-question-container">
                    {this.props.options.map((item, i) => ( 
                        <Circle 
                            key={i}
                            title={item.title}
                            background={item.image}
                            action={this.props.action}
                            updateState={this.props.updateState}
                        >
                        </Circle>
                    ))}
                </div>
            </div>

        )
    }
}


export default CircleQuestion;
