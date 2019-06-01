var React = require('react');
import { HashRouter, Route } from 'react-router-dom'

var Base = require('./components/Base.js');
var Page1 = require('./components/Page1.js');
var Page2 = require('./components/Page2.js');
var Login = require('./components/Login.js');

export default class Routes extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" component={Base} />
                <Route path="/login" component={Login} />
            </HashRouter>
        );
    }
}