import React from 'react';
import '../scss/main.scss';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'
import {Navbar, Nav} from "react-bootstrap";
import {Container} from "./form/Container";

const Header = () => {
    const triggerText = 'Kontakt';
    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }
    return (
        <section id='header'>
            <Link to='/'><img src={logo} alt='Lady Pank' className='logo'/></Link>
            <Navbar bg='black' expand='lg' className='navbar'>
                <Navbar.Toggle className='toggle'/>
                <Navbar.Collapse className='collapse'>
                    <Nav className='me-auto nav'>
                        <Link className='linkHeader' to='/'>Strona główna</Link>
                        <Link className='linkHeader' to='/AboutUs'>O nas</Link>
                        <Link className='linkHeader' to='/Concerts'>Koncerty</Link>
                        <Container className='linkHeader' triggerText={triggerText} onSubmit={onSubmit}/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
}

export default Header;