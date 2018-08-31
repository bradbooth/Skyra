import React from 'react';
import { NavLink } from 'react-router-dom'
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
                        <NavItem eventKey={1} href="#">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Account
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
)

export default Header