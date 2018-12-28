import React from 'react'
import { connect } from 'react-redux'
import { ProgressBar, Step } from "react-step-progress-bar";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Grid, Row, Col, Button } from "react-bootstrap";

import oilsInfo from '../oils.json'


const RatingBox = ({title, ratings}) => (
    <div className="product-question-rating-box">
        <h2>{title}</h2>
        <div>
            {Object.keys(ratings).map((item, i) => (
                <Row key={i} className="product-question-rating-row">
                    <Col xs={4}>
                        <p className="product-question-rating-label">{item}</p>
                    </Col>

                    <Col xs={8}>
                        <ProgressBar
                            percent={ratings[item] * 10}
                            filledBackground= "#c9e3f1"
                            unfilledBackground="none"
                        >
                        </ProgressBar>
                    </Col>
                    
                </Row>
            ))}
        </div>
        <div>
                <Button className="button-black product-question-select-button">Select</Button>
        </div>
    </div>
)


export class ProductQuestion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           
        };
    }


    render() {

        const skintype = this.props.skintype
        const actiontype = this.props.actiontype
        const sensitive = this.props.sensitive

        const matches = Object.keys(oilsInfo)
        .filter(x => oilsInfo[x].skintypes.includes(skintype))
        .filter(x => sensitive === "Yes" ? oilsInfo[x].skintypes.includes("Sensitive") : x)
        .sort((x, y) => oilsInfo[y].ratings[actiontype] - oilsInfo[x].ratings[actiontype] )
        .slice(0, 3)

        return (
            <div className="product-question-rating-container">
                <div className="product-question-title-container">
                    <h1>Select one</h1>
                </div>
                    {matches.map((item, i) => (
                        <RatingBox 
                            key={i}
                            title={item}
                            ratings={oilsInfo[item].ratings}
                        />
                    ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        skintype: state.survey.skintype,
        sensitive: state.survey.sensitive,
        actiontype: state.survey.actiontype,
        fragrancetype: state.survey.fragrancetype
    }
}

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps)(ProductQuestion);
