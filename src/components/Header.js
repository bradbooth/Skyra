import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'
import {action as toggleMenu} from 'redux-burger-menu';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class Header extends React.Component {

    toggleShoppingCart = () => {
        this.props.showCart(!this.props.shoppingCartMenuOpen)
    }

    closeShoppingCart = () => {
        this.props.showCart(false)
    }

    render() {
        return (
            <div className="header">
                <Navbar staticTop={true} collapseOnSelect={true} >
                    <Navbar.Header>
                    <Navbar.Brand  >
                        <NavLink to="/home" onClick={this.closeShoppingCart} className="header__title">SKÝRA</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                            <LinkContainer to="/home">
                                <NavItem onClick={this.closeShoppingCart}>home</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/product">
                                <NavItem onClick={this.closeShoppingCart}>product</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <NavItem onClick={this.closeShoppingCart}>login</NavItem>
                            </LinkContainer>
                            
                            <NavItem onClick={this.toggleShoppingCart}>
                            <FontAwesomeIcon icon="shopping-cart" /></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingCartMenuOpen: state.burgerMenu.isOpen
    }
}

const mapDispatchToProps = (dispatch) => ({
    showCart: (val) => dispatch(toggleMenu(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)