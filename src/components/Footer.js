import React from 'react';
import '../scss/main.scss'
import logoFB from '../assets/logo_facebook.png';
import logoIG from '../assets/logo_instagram.png';

const Footer = () => {
    return (
        <section className='footer'>
            <h1>Znajdź nas</h1>
            <div className='media'>
                <a href='https://www.facebook.com/LadyPank'><img src={logoFB} alt="facebook" className='logo'/></a>
                <a href='https://www.instagram.com/ladypank_official/?hl=pl'><img src={logoIG} alt="instagram"
                                                                                  className='logo'/></a>
            </div>
        </section>
    );
}

export default Footer;