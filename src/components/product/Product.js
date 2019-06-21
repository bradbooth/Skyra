import React from 'react';
import { connect } from "react-redux";
import { action as toggleMenu } from 'redux-burger-menu';
import { Container, Row, Col, Button, DropdownButton, MenuItem } from "react-bootstrap"
import { TransitionGroup, CSSTransition  } from 'react-transition-group'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { startUpdateCheckout } from '../../actions/shopify';
import { startShowSurvey } from '../../actions/survey'
import Survey from './../survey/Survey'
import ProductOptions from './ProductOptions'
import ColorOptions from './ColourOptions';
import AddToCartButton from './AddToCartButton'

export class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownselection: "Red",
            currentVariant: 1
        };
    }

    componentWillMount = () => {
        this.props.showSurvey(false)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6} className="product-image-container">
                        <img src={this.props.products && this.props.products[0].images[0].src} alt=""/>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="product-options-container">
                    
                        <CSSTransition
                            in={this.props.survey.active}
                            timeout={800}
                            classNames="fade"
                            unmountOnExit
                        >
                            <Survey />
                        </CSSTransition>

                        <CSSTransition
                            in={!(this.props.survey.active)}
                            timeout={800}
                            classNames="fade"
                            unmountOnExit
                        >
                            <div className="product-options">
                                <Col xs={{order: 10, offset: 1}}>
                                    <ProductOptions />
                                </Col>
                                <Col xs={{order: 6, offset: 3}}>
                                    <ColorOptions />
                                </Col>
                                <Col xs={{order: 10, offset: 1}} className="product-options-buttons">
                                    <AddToCartButton />
                                    <Button className="button" type="button" onClick={() => this.props.showSurvey(true)}>Take the quiz</Button>
                                </Col>
                            </div>
                        </CSSTransition> 
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.shopify.products,
        checkout: state.shopify.checkout,
        client: state.shopify.client,
        survey: state.survey,
        variants: state.variant
    }
};

const mapDispatchToProps = (dispatch) => ({
    showSurvey: (bool) => dispatch(startShowSurvey(bool))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Product);
