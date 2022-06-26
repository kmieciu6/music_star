import React from 'react';
import Header from './Header';
import Opening from "./Opening";
import Video from "./Video";
import Footer from "./Footer";

const Home = () => {
    return (
        <section id='home'>
            <Header/>
            <Opening/>
            <Video embedId="3B1flDAyb48"/>
            <Footer/>
        </section>
    );
}

export default Home;