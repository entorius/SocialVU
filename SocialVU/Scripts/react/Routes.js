var React = require('react');
import { HashRouter, Route } from 'react-router-dom'

import Base from './components/Base.js';
import Login from './components/Login.js';

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