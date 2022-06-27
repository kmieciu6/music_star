import React from 'react';
import '../scss/main.scss';
import Header from './Header';
import Footer from './Footer';
import Accordion from './Accordion';
import {concertsData} from './concertsData'

const Concerts = () => {
    return (
        <section id='concerts'>
            <Header/>
            <div>
                <h1>Koncerty</h1>
                <div className="accordion">
                    {concertsData.map(({title, place, adres, hour, ticket}) =>
                        <Accordion title={title} place={place} adres={adres} hour={hour} ticket={ticket}/>
                    )}
                </div>
            </div>
            <Footer/>
        </section>
    );
}

export default Concerts;