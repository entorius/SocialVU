import React from 'react';
var ReactDom = require('react-dom');
//var Routes = require('./Routes.js')

import { HashRouter, Route } from 'react-router-dom'

import Base from './components/Base.js';
import NewsPage from'./components/NewsPage.js';
import LecturesPage from './components/LecturesPage.js';
import EventsPage from './components/EventsPage.js';
import FAQpage from './components/FAQpage';
//import ChatPage from './components/ChatPage/ChatPage.js';
import Home from './components/Home';
import EmailPageNew from './components/Email/EmailPageNew.js';
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

import Login from './components/Login.js';

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
                <Route path="/home" component={Home} />
                <Route path="/home/newsPage" component={NewsPage} />
                <Route path="/home/lecturers" component={LecturesPage} />
                <Route path="/home/events" component={EventsPage} />
                <Route path="/home/faq" component={FAQpage} />
                <Route exact path="/" component={Base} />
                <Route exact path="/login" component={Login} />
                {/*<Route path="/chatPage" component={ChatPage} />*/}
                <Route path="/home/emailPage" component={EmailPageNew} />
                
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