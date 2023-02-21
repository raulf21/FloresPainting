import React from 'react'
import {Container, Nav, Navbar, Button} from 'react-bootstrap'
import './header.css';


function Header(){
    return(
        <div className='header'>
        <header>
        <Navbar collapseOnSelect expand="lg" varient="light" >
        <Container>
            <Navbar.Brand href="#home" style={{ color: '#fff' }}>Flores Painting</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" bg="light" >
                <Nav.Link className="nav-link-custom" href="#About">About</Nav.Link>
                <Nav.Link className="nav-link-custom" href="#Services">Services</Nav.Link>
                <Nav.Link className="nav-link-custom" href="#Portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#About" className="nav-link-custom">About</Nav.Link>
            </Nav>
            <Button className="book-button">Book a Service</Button>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
        </div>
    )
}

export default Header