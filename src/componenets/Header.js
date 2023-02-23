import React from 'react'
import {Container, Nav, Navbar, Button} from 'react-bootstrap'
import './header.css';
import {LinkContainer} from 'react-router-bootstrap'


function Header(){
    return(
        <div className='header'>
        <header>
        <Navbar collapseOnSelect expand="lg" varient="light" >
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand style={{ color: '#fff' }}>Flores Painting</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" bg="light" >
                <LinkContainer to="/virtual">
                    <Nav.Link className="nav-link-custom">Virtual Room</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/services">
                    <Nav.Link className="nav-link-custom">Services</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/portfolio">
                    <Nav.Link className="nav-link-custom">Portfolio</Nav.Link>
                </LinkContainer>
            </Nav>
            <LinkContainer to="/booking">
                <Button className="book-button">Book a Service</Button>
            </LinkContainer>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
        </div>
    )
}

export default Header