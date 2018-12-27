import React from 'react';
import { connect } from "react-redux";
import { action as toggleMenu } from 'redux-burger-menu';
import { Grid, Row, Col, Button, DropdownButton, MenuItem } from "react-bootstrap"
import { TransitionGroup, CSSTransition  } from 'react-transition-group'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { startUpdateCheckout } from '../../actions/shopify';
import { startShowSurvey } from '../../actions/survey'
import Survey from './../survey/Survey'
import ProductOptions from './ProductOptions'
import ColorOptions from './ColourOptions';


export class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownselection: "Red",
            currentVariant: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xODc1MzY0NjQ5Mzc2MA==", //TODO - This should be pulled dynamically from products
        };
    }

    //Add an item to the checkout cart
    addItemToCart = () => {

        const lineItemsToAdd = [{
            variantId: this.state.currentVariant, 
            quantity: 1,
            customAttributes: Object.keys(this.props.variants).map((item) => (
                {
                    key: item,
                    value: this.props.variants[item]
                }
            ))
        }]

        console.log()

        const checkoutId = this.props.checkout.id

        this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
            this.props.updateCheckout(res)
        });

        this.props.showCart(true)
    }

    dropdownChanged = (e) => {
        const dropdownselection = e.target.value
        this.setState(() => ({ dropdownselection }));
    }

    render() {
        return (
            <Grid>
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
                                <Col xs={10} xsOffset={1}>
                                    <ProductOptions />
                                </Col>
                                <Col xs={6} xsOffset={3}>
                                    <ColorOptions />
                                </Col>
                                <Col xs={10} xsOffset={1} className="product-options-buttons">
                                    <Button className="button-black" type="button" onClick={this.addItemToCart}>Add to cart</Button>
                                    <Button className="button" type="button" onClick={() => this.props.showSurvey(true)}>Take the quiz</Button>
                                </Col>
                            </div>
                        </CSSTransition> 
                    </Col>
                </Row>
            </Grid>
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
    updateCheckout: (checkout) => dispatch(startUpdateCheckout(checkout)),
    showCart: () => dispatch(toggleMenu(true)),
    showSurvey: (bool) => dispatch(startShowSurvey(bool))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Product);
