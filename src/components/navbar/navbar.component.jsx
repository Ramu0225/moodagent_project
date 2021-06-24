import React, { useState } from "react";
import {Navbar, Nav, Button } from 'react-bootstrap';
import './navbar.styles.scss';
import Logo from "../logo/logo.component";
import { Link } from "react-router-dom";

const NavigationBar =()=>{
    const [isNavBarOpen, toggleNavBar] = useState(false);
    return(
        <Navbar collapseOnSelect expand="lg" expanded={isNavBarOpen} className="nav-color" variant="dark" sticky="top">
            <Navbar.Brand as={Link} to="/">
                <Logo />
            </Navbar.Brand>
            <Navbar.Toggle onClick={() => toggleNavBar(!isNavBarOpen)}>
                {isNavBarOpen ? <i  className="fa fa-times"></i> :  <i  className="fa fa-bars"></i>}
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/"  onClick={() => toggleNavBar(false)}>Home</Nav.Link>
                <Nav.Link as={Link} to="/download"  onClick={() => toggleNavBar(false)}>Download</Nav.Link>
                    <Nav.Link as={Link} to="/login" onClick={() => toggleNavBar(false)}>Support</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/login" onClick={() => toggleNavBar(false)}>Login</Nav.Link>
                    <Button as={Link} to="/pricing">Start free trial</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;