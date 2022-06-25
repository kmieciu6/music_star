import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom'
import './scss/main.scss'
import Home from './components/Home'
import AboutUs from './components/AboutUs'

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
                <Route exact path={'AboutUs'} element={<AboutUs/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;