import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        <Navbar id='nav-bg' className='sticky-top' collapseOnSelect expand="md" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/home' className='text-warning fw-bold'>BIKE PLANET</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        <Nav.Link as={Link} to='/inventory'>Inventory</Nav.Link>
                        <Nav.Link as={Link} to='/additem'>Add Item</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;