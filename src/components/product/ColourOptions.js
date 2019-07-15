
import React from 'react';
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { startUpdateColour } from '../../actions/variant'


export class ColorOptions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          selectedColour: "#FF5E45"
        };
    }


    updateColour (colour) {
        this.setState({
            selectedColour: colour
        })
        this.props.updateColour(colour)
    }

    render() {

        const colours = {
            "#0693E3":"Blue",
            "#EB144C":"Red",
            "#00D084":"Green",
            "#9900EF":"Purple",
            "#FCB900":"Yellow",
            "#FF5E35":"Orange",
            "#f7f7f7": "None"
        }

        return (
            <Container>
                <Row>
                    <h4 className="dropdown-title">Colour</h4>
                </Row>
                <Row>
                    <div className="colours-container">
                        {
                            Object.keys(colours).map((item, i) => (
                                <span 
                                    key={i}
                                    className={"colour-option" + (colours[item] === this.state.selectedColour ? " colour-option-selected" : "")}
                                    style={{
                                        "backgroundColor": item,
                                        "border": colours[item] === "None" ? "solid #9a9a9a 1px" : "" 
                                    }}
                                    onClick={() => this.updateColour(colours[item])}>
                                </span>
                            ))
                        }

                        
                    </div>
                </Row>
            </Container>
 
        )
    }   
}

const mapStateToProps = (state) => {
    return {
        state
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateColour: (colour) => dispatch(startUpdateColour(colour)),
});
    
export default connect(mapStateToProps, mapDispatchToProps)(ColorOptions);
