var React = require('react');
import { HashRouter, Route } from 'react-router-dom'

var Base = require('./components/Base.js');
var Page1 = require('./components/Page1.js');
var Page2 = require('./components/Page2.js');

export default class Routes extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" component={Base}>
                    <Route path="/page1" compnent={Page1} />
                    <Route path="/page2" component={Page2}/>
                </Route>
            </HashRouter>
        );
    }
}