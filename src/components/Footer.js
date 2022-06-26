import React from "react";
import '../scss/main.scss'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
      <section className='footer'>
          <Link to='https://www.facebook.com/LadyPank'></Link>
          <Link to='https://www.instagram.com/ladypank_official/?hl=pl'></Link>
      </section>
    );
}

export default Footer;