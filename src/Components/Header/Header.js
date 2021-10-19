import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
    const {user,logout} = useFirebase();
    return (
        <div>
            
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand><Link to="/home"><FontAwesomeIcon icon={faDumbbell}/> LifeFit Gym</Link></Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                <Nav.Link><Link to="/services">Services</Link></Nav.Link>
                <Nav.Link><Link to="/membership">Membership</Link></Nav.Link>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                </Nav>
                {
                    user?.email ? 
                    <div className="logout-user d-flex">
                        <Nav.Link><Link to="/home">{user.displayName}</Link></Nav.Link>
                        <button className="btn btn-outline-primary" onClick={logout}>LogOut</button>
                    </div> 
                :
                <div className="login-reg d-flex">
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                </div>
                }
                
               
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;