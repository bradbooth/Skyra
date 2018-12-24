import React from 'react';
import { connect } from "react-redux";
import {slide as Menu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import LineItem from './LineItem';


const ReduxBurgerMenu = reduxBurgerMenu(Menu);

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
          <ReduxBurgerMenu right>

            <h1>Shopping Cart</h1>

            {this.props.checkout && 
                this.props.checkout.lineItems.map((item, i) => <LineItem key={i} {...item}/>)
            }

            {this.props.checkout && 
                <div>
                <h2>Total: ${this.props.checkout.totalPrice}</h2>
                </div>
            }

            <button onClick={this.openCheckout}>Checkout</button>

          </ReduxBurgerMenu>
        );
    }

}

const mapStateToProps = (state) => {
  return {
    checkout: state.shopify.checkout,
  }
}

export default connect(mapStateToProps)(ShoppingCart);