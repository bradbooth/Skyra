import React from 'react';
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { startUpdateBase } from '../../actions/variant'

var CircleColor = ({colour}) => {
    backgroundColor: colour
  };

const Circle = ({colour}) => (
    <span className="dot" style={CircleColor}></span>
)

export class ColorOptions extends React.Component {

    render() {

        const colours = ["#FF5E45","#FF9C5E","#FFCE8A","#D0FF8A","#AED1A9","#FF5E45","#FF9C5E","#FFCE8A" ]

        return (
            <div className="colours-container">
                {
                    colours.map((item, i) => (
                        <span 
                            key={i}
                            className="dot" 
                            style={{"backgroundColor": item}}
                            onClick={() => console.log("clickity clieck")}></span>
                    ))
                }
            </div>
        )
    }   
}

const mapStateToProps = (state) => {
    return {
        state
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateBase: (base) => dispatch(startUpdateBase(base)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ColorOptions);
