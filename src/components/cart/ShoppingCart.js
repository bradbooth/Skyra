import React from 'react';
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TransitionGroup, CSSTransition  } from 'react-transition-group'
import { slide as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import { LineItem } from './LineItem';

const CartMenu = reduxBurgerMenu(Menu);


/*
 The shopping cart menu that appears when you click
 on cart or add an item
*/
export class ShoppingCart extends React.Component {

    showSettings (event) {
        event.preventDefault();
    }

    openCheckout = () => {
        window.open(this.props.checkout.webUrl);
    }

    render () {
        return (
          <CartMenu right>

            <h1 className="cart-title">Your Cart</h1>
 
            <Container className="cart-middle-container">
            <TransitionGroup className="transitionGroup">
                {this.props.checkout.lineItems.map((item, i) => (
                    <CSSTransition
                    key={item.id}
                    timeout={350}
                    classNames='fade'
                    >
                        <LineItem key={i} {...item}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            </Container>

            <Container className="cart-bottom-container">
                <Row >
                    <Col xs={8} className="checkout-text-left">Shipping</Col>
                    <Col xs={4} className="checkout-text-right">FREE</Col>
                </Row>
                <Row >
                    <Col xs={8} className="checkout-text-left">Subtotal</Col>
                    <Col xs={4} className="checkout-text-right">${this.props.checkout.totalPrice}</Col>
                </Row>

                <Row>
                    <Col xs={{order:10, offset:1}} >
                        <Button 
                            onClick={this.openCheckout}
                            className="button checkout-button">Checkout
                        </Button>
                    </Col>
                </Row>
            </Container> 

          </CartMenu>
        );
    }

}

const mapStateToProps = (state) => {
  return {
    checkout: state.shopify.checkout,
  }
}

export default connect(mapStateToProps)(ShoppingCart);

//Empty cart
// {(this.props.checkout.lineItems.length == 0) && 
//     <div className="cart-empty">
//         <span>Your cart is empty</span>
//     </div>
// }