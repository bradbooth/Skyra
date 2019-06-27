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
                <Navbar fixed={top} collapseOnSelect={true} expand="sm" >
                    
                    <Nav.Link>
                        <LinkContainer to="/home">
                            <NavItem className="header-title" onClick={this.closeShoppingCart}>SKÝRA</NavItem>
                        </LinkContainer>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav >
                            <Nav.Link>
                                <LinkContainer to="/home">
                                    <NavItem onClick={this.closeShoppingCart}>home</NavItem>
                                </LinkContainer>
                            </Nav.Link>
                            <Nav.Link>
                                <LinkContainer to="/product">
                                    <NavItem onClick={this.closeShoppingCart}>product</NavItem>
                                </LinkContainer>
                            </Nav.Link>
                            <Nav.Link>
                                <LinkContainer to="/login">
                                    <NavItem onClick={this.closeShoppingCart}>login</NavItem>
                                </LinkContainer>
                            </Nav.Link>
                            
                            <Nav.Link>
                                <NavItem onClick={this.toggleShoppingCart}>
                                <FontAwesomeIcon icon="shopping-cart" /></NavItem>
                            </Nav.Link>
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