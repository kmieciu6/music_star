import React from 'react';
import '../scss/main.scss';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'
import {Navbar, Nav} from "react-bootstrap";


const Header = () => {
    return (
        <section id='header'>
            <Link to='/'><img src={logo} alt='Lady Pank' className='logo'/></Link>

            <Navbar bg="dark" expand="lg" className='navbar'>
                <Navbar.Toggle className='toggle'/>
                <Navbar.Collapse className='collapse'>
                    <Nav className="me-auto nav">
                        <Link className='linkHeader' to='/'>Strona główna</Link>
                        <Link className='linkHeader' to='/AboutUs'>O nas</Link>
                        <Link className='linkHeader' to='/Concerts'>Koncerty</Link>
                        <Link className='linkHeader' to='/Contact'>Kontakt</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
}

export default Header;