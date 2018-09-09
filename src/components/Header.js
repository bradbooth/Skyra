import React from 'react';
import { NavLink } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, NavItem, Nav } from 'react-bootstrap'

const Header = () => (
    <div>
        <div className="header">
            <Navbar staticTop={true}>
                <Navbar.Header>
                <Navbar.Brand  >
                    <NavLink to="/home" className="header__title">SKÝRA</NavLink>
                </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer to="/home">
                            <NavItem>home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <NavItem>login</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
)

export default Header