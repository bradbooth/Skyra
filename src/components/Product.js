import React from 'react';
import { connect } from "react-redux";
import { startUpdateCheckout } from '../actions/shopify';
import {action as toggleMenu} from 'redux-burger-menu';


export class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownselection: "1",
            //This should be pulled dynamically from products
            currentVariant: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xODc1MzY0NjQ5Mzc2MA=="
        };
    }

    //Add an item to the checkout cart
    addItemToCart = () => {

        const lineItemsToAdd = [{
            variantId: this.state.currentVariant, 
            quantity: 1,
            customAttributes: [
                {
                    key: "Dropdown Selection",
                    value: this.state.dropdownselection
                }
            ]
        }]
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
            <div>
                {this.props.products && 
                    <div>
                        <h1> {this.props.products && this.props.products[0].title}</h1>
                        <img src={this.props.products && this.props.products[0].images[0].src} alt=""/>
        
                        <select onChange={this.dropdownChanged}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
        
                        <button type="button" onClick={this.addItemToCart}>Add to cart</button>
                    </div>
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.shopify.products,
        checkout: state.shopify.checkout,
        client: state.shopify.client,
        state: state, //TODO - REMOVE ME - unneccassary to keep
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateCheckout: (checkout) => dispatch(startUpdateCheckout(checkout)),
    showCart: () => dispatch(toggleMenu(true))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Product);