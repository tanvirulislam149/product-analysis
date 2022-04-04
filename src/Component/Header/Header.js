import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

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
                            <CustomLink className='me-4 fw-bold text-decoration-none' to="/">HOME</CustomLink>
                            <CustomLink className='me-4 fw-bold text-decoration-none' to="/allReview">REVIEW</CustomLink>
                            <CustomLink className='me-4 fw-bold text-decoration-none' to="/dashboard">DASHBOARD</CustomLink>
                            <CustomLink className='me-4 fw-bold text-decoration-none' to="/blogs">BLOGS</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;