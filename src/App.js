import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import './scss/main.scss';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Concerts from './components/Concerts';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
                <Route exact path={'AboutUs'} element={<AboutUs/>}/>
                <Route exact path={'Concerts'} element={<Concerts/>}/>
                <Route exact path={'Contact'} element={<Contact/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;