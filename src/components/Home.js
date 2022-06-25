import React from 'react';
import '../scss/main.scss'
import Header from './Header';
import Opening from "./Opening";

const Home = () => {
    return (
        <section id='home'>
            <Header/>
            <Opening/>
        </section>
    );
}

export default Home;