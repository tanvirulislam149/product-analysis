import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='me-4 text-body fw-bold text-decoration-none' to="/">HOME</Link>
                            <Link className='me-4 text-body fw-bold text-decoration-none' to="/allReview">REVIEW</Link>
                            <Link className='me-4 text-body fw-bold text-decoration-none' to="/dashboard">DASHBOARD</Link>
                            <Link className='me-4 text-body fw-bold text-decoration-none' to="/blogs">BLOGS</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;