import React from 'react';
import { connect } from "react-redux";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { startIncrementQuantity, startDecrementQuantity, startUpdateCheckout } from '../../actions/shopify';


export class LineItem extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            plusHover: false,
            minusHover:false,
            quantity: this.props.quantity
        };
    }

    //Ensure that when new prop quantity is received we update the state
    //(on add to cart when item already exists in cart)
    componentDidUpdate(oldProps) {
        const newProps = this.props
        if(oldProps.quantity !== newProps.quantity) {
          this.setState({
              quantity: this.props.quantity
          })
        }
    }

    // TODO - Violating DRY, group decrement, increment, set into one function perhaps?
    decrementQuantity = () => {
        if(this.props.quantity > 0){
            //Decrement the quantity by 1
            this.setState({
                quantity: (this.props.quantity - 1)
            })

            const checkoutId = this.props.checkout.id
            const lineItemsToUpdate = [{
                id: this.props.id, 
                quantity: (this.props.quantity - 1)
            }]
    
            this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
                this.props.updateCheckout(res)
            });
        }
    }

    incrementQuantity = () => {

        this.setState({
            quantity: (this.props.quantity + 1)
        })

        const checkoutId = this.props.checkout.id
        const lineItemsToUpdate = [{
            id: this.props.id, 
            quantity: (this.props.quantity + 1)
        }]

        this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
            this.props.updateCheckout(res)
        });

    }

    setQuantity = (e) => {
        const value = e.target.value

        const checkoutId = this.props.checkout.id
        const lineItemsToUpdate = [{
            id: this.props.id, 
            quantity: parseInt(value)
        }]

        this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
            this.props.updateCheckout(res)
        });
    }

    //Input for quantity
    handleInputChange = (e) => {
        const value = e.target.value
        const upTo2Digits = /^[0-9]{0,2}$/;
        if(value.match(upTo2Digits)){
            this.setState({
                quantity: value
            })
        }
    }



    //Set the hover state in order to apply the hover
    //css style on only the corresponding button without using
    // css:hover class which would apply it to the other buttons
    setHoverOnPlus = (b) =>{
        this.setState({
            plusHover: b
        })
    }

    setHoverOnMinus = (b) =>{
        this.setState({
            minusHover: b
        })
    }

    render() {

        let plusButtonStyle = this.state.plusHover ? "line-item-quantity-button-hover" : "line-item-quantity-button"
        let minusButtonStyle = this.state.minusHover ? "line-item-quantity-button-hover" : "line-item-quantity-button"

        return (
            <Row className="line-item">
                <Col xs={4} md={4} className="line-item-left">
                    <img 
                        className="line-item-image" 
                        src="https://via.placeholder.com/150" 
                        alt=""/>
                
                    <div className="line-item-quantity-container">
                        <span 
                            className={minusButtonStyle} 
                            onClick={this.decrementQuantity}
                            onMouseEnter={() => this.setHoverOnMinus(true)}
                            onMouseLeave={() => this.setHoverOnMinus(false)}>
                            <FontAwesomeIcon icon="minus" />
                        </span>
                        <input 
                            className="line-item-quantity-form" 
                            type="text" 
                            value={this.state.quantity} /* Allow text to quickly update using local state */
                            onChange={this.handleInputChange}
                            onBlur={this.setQuantity}
                            pattern="[0-9]*"
                        />
                        <span 
                            className={plusButtonStyle}
                            onClick={this.incrementQuantity} 
                            onMouseEnter={() => this.setHoverOnPlus(true)}
                            onMouseLeave={() => this.setHoverOnPlus(false)}>
                            <FontAwesomeIcon icon="plus"/>
                        </span>
                    </div>
               </Col>
               
                <Col xs={8} md={8} >
                    <Col xs={12}>
                        <h4>{this.props.title}</h4>
                    </Col>
                    <Col xs={12}>
                        {this.props.customAttributes.map(
                            (item, i) => <div 
                                            key={i} 
                                            className="line-item-custom-attribute">
                                            {item.value}
                                        </div>)
                        }
                    </Col>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        checkout: state.shopify.checkout,
        client: state.shopify.client
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCheckout: (checkout) => dispatch(startUpdateCheckout(checkout))
});

export default connect(mapStateToProps, mapDispatchToProps)(LineItem);