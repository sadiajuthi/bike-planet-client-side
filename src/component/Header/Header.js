import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate()

    const handleLogOut = () => {
        signOut(auth);
        navigate('/home')
    }


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

                        {
                            user ?
                                <Nav.Link as={Link} to='/additem'>Add Product</Nav.Link>
                                :
                                <></>
                        }
                        {
                            user ?
                                <Nav.Link as={Link} to='/myitem'>My Product</Nav.Link>
                                :
                                <></>
                        }

                    </Nav>
                    <Nav>
                        {
                            user ?
                                <Nav.Link as={Link} to='/login' onClick={handleLogOut}>Log out</Nav.Link>
                                :
                                <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
                        }
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;