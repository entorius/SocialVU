import React from 'react';
var ReactDom = require('react-dom');
//var Routes = require('./Routes.js')

import { HashRouter, Route } from 'react-router-dom'

import Base from './components/Base.js';
import Login from './components/Login.js'
import Page1 from'./components/Page1.js';
import Page2 from'./components/Page2.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1> You </h1>
             </div>
            )
    }
}


class Routes extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route exact path="/" component={Base} />
                <Route exact path="/login" component={Login} />
            </HashRouter>
        );
    }
}

ReactDom.render(
    <Routes />,
    document.getElementById("root")
);