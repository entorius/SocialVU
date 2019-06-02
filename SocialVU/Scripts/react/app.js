import React from 'react';
var ReactDom = require('react-dom');
//var Routes = require('./Routes.js')

import { HashRouter, Route } from 'react-router-dom'

import Base from './components/Base.js';
import NewsPage from'./components/NewsPage.js';
import LecturesPage from './components/LecturesPage.js';
import EventsPage from './components/EventsPage.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#9e9e9e'
        },

        secondary: {
            main: '#d32f2f'
        }

    },
});


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
                <Route path="/" exact component={Base} />
                <Route path="/home" component={NewsPage} />
                <Route path="/lectures" component={LecturesPage} />
                <Route path="/events" component={EventsPage} />
            </HashRouter>
        );
    }
}

ReactDom.render(
    <MuiThemeProvider theme={theme}>
        <Routes />
     </MuiThemeProvider>,
    document.getElementById("root")
);