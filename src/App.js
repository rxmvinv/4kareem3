import React, { Component } from 'react';
import Routes from './Routes';
//import { library } from '@fortawesome/fontawesome-svg-core'
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
//import './assets/stylesheets/app.scss';

const browserHistory = createBrowserHistory();

const App =() => {
    return (
        <Router history={browserHistory}>
            <Routes />
        </Router>
    )
};
export default App;
