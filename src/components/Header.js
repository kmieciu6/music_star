import React from 'react';
import '../scss/main.scss';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <section id='header'>
            <Link to='/'><img src={logo} alt='Lady Pank' className='logo'/></Link>
            <ul className='nav'>
                <li><Link className='linkHeader' to='/'>Strona główna</Link></li>
                <li><Link className='linkHeader' to='/AboutUs'>O nas</Link></li>
                <li><Link className='linkHeader' to='/Concerts'>Koncerty</Link></li>
                <li><Link className='linkHeader' to='/Contact'>Kontakt</Link></li>
            </ul>
        </section>
    );
}

export default Header;