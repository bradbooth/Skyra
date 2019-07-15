import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'
import {action as toggleMenu} from 'redux-burger-menu';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class Header extends React.Component {

    constructor(props) {
        super(props);
        // this.navbarCollapseHide = this.navbarCollapseHide.bind(this);
        document.addEventListener('click', this.handleDocumentClick, true);

        this.state = {
            navbarCollapse: "justify-content-end"
        }
    }

    // If we click outside the navbar we want to collapse it
    handleDocumentClick = (e) => {
        const container = this._element;
        if (e.target !== container && !container.contains(e.target)) {
            this.navbarCollapse()
        } 
    }

    toggleShoppingCart = () => {
        this.props.showCart(!this.props.shoppingCartMenuOpen)
    }

    closeShoppingCart = (e) => {
        this.props.showCart(false)
    }

    navbarShow = () => {
        this.setState({
            navbarExapnded: true
        })
    }

    navbarCollapse = () => {
        this.setState({
            navbarExapnded: false
        })
    }

    navbarToggle = () => {
        this.setState({
            navbarExapnded: !this.state.navbarExapnded
        })
        this.closeShoppingCart()
    }

    render() {
        return (
            <div >
                <Navbar className="header"
                        onSelect={this.navbarCollapse} 
                        expand="sm" 
                        fixed="top"
                        onToggle={() => console.debug("Navbar toggle")} 
                        expanded={this.state.navbarExapnded}>
                    
                    <Nav.Link>
                        <LinkContainer to="/home">
                            <NavItem className="header-title" onClick={this.closeShoppingCart}>SKÝRA</NavItem>
                        </LinkContainer>
                    </Nav.Link>
                    <Navbar.Toggle 
                        ref={(c)=> (this._element = c)}
                        aria-controls="basic-navbar-nav" 
                        onClick={this.closeShoppingCart && this.navbarToggle}
                    />

                    <Navbar.Collapse className="justify-content-end" >
                        <Nav >
                            {/* eventKey required in order for collapseOnSelect to work */}
                            <Nav.Link eventKey="1"> 
                                <LinkContainer to="/home">
                                    <NavItem onClick={this.closeShoppingCart}>home</NavItem>
                                </LinkContainer>
                            </Nav.Link>
                            <Nav.Link eventKey="1">
                                <LinkContainer to="/product">
                                    <NavItem onClick={this.closeShoppingCart}>product</NavItem>
                                </LinkContainer>
                            </Nav.Link>
                            <Nav.Link eventKey="1">
                                <LinkContainer to="/login">
                                    <NavItem onClick={this.closeShoppingCart}>login</NavItem>
                                </LinkContainer>
                            </Nav.Link>
                            
                            <Nav.Link eventKey="1">
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