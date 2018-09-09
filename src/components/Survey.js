import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, FormGroup, Checkbox } from 'react-bootstrap'
import {RadioGroup, Radio} from 'react-radio-group'
import Header from './Header'


export class Survey extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
          skintype: ''
        };
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({
          skintype: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`You chose ${this.state.skintype}`);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="fadeIn">
                    <Grid>
                        <Row>
                            <Col className="SurveyStart" xs={12}>
                                <h1 className="text-center">What are your skin concerns?</h1>
                                <Col xs={12} md={8} mdOffset={2}>
                                    <form onSubmit={this.handleSubmit}>                                

                                    <Row className="inputGroup">
                                        <input
                                            type="radio"
                                            id="oily"
                                            value="oily"
                                            checked={this.state.skintype === "oily"}
                                            onChange={this.handleChange}/>
                                        <label htmlFor="oily">Oily</label>
                                    </Row>

                                    <div className="inputGroup">
                                        <input
                                            type="radio"
                                            id="dry"
                                            value="dry"
                                            checked={this.state.skintype === "dry"}
                                            onChange={this.handleChange}/>
                                        <label htmlFor="dry">Dry</label>
                                    </div>
                                    
                                    <div className="inputGroup">
                                        <input
                                            type="radio"
                                            id="acne"
                                            value="acne"
                                            checked={this.state.skintype === "acne"}
                                            onChange={this.handleChange}/>
                                        <label htmlFor="acne">Acne</label>
                                    </div>
                                    
                                    <div className="inputGroup">
                                        <input
                                            type="radio"
                                            id="dullness"
                                            value="dullness"
                                            checked={this.state.skintype === "dullness"}
                                            onChange={this.handleChange}/>
                                        <label htmlFor="dullness">Dullness</label>
                                    </div>

                                    <button className="button" type="submit">Next</button>
                                    </form>
                                </Col>
                                    
                                    

                        
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}
// <ul className="survey">
//<li>
                                //     <label>
                                //         <input
                                //         type="radio"
                                //         value="Dry"
                                //         checked={this.state.skintype === "Dry"}
                                //         onChange={this.handleChange}
                                //         />
                                //         <span>Dry</span>
                                //     </label>
                                //     </li>

                                //     <li>
                                //     <label>
                                //         <input
                                //         type="radio"
                                //         value="Aging"
                                //         checked={this.state.skintype === "Aging"}
                                //         onChange={this.handleChange}
                                //         />
                                //         <span>Aging</span>
                                //     </label>
                                //     </li>
                                // </ul>
export default Survey
