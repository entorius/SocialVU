var React = require('react');
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            password: ""
        }
        this.loginVerification = this.loginVerification.bind(this);
    }
    render() {
        return (
            <div class="particles-login">
                <Particles
                    params={particleOpt}
                />
            <React.Fragment>
                <CssBaseline />
                    <Container class="particles-login login-body" maxWidth="sm">
                    <Typography class="login-typography" component="div" style={{ backgroundColor: '#fff' }}>
                        <div class="login-header">
                            <a>
                                <img src="https://sso.vu.lt/SSO/module.php/themevu/logo_sso_lt.svg" alt="logo" />
                            </a>
                        </div>
                        <div class="login-text-confirm">
                            Paslaugai reikalingas Jūsų tapatybės patvirtinimas
                        </div>
                        <div>
                            <form noValidate autoComplete="off">
                                <div class="login-username">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <FontAwesomeIcon icon={faUser} size="4x" />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                value={this.state.userName}
                                                onChange={e => this.setState({ userName: e.target.value })}
                                                id="login-username-field"
                                                fullWidth
                                                style={{ margin: 8 }}
                                                className="login-field"
                                                placeholder="Prisijungimo vardas"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </div> 
                                <div class="login-password">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <FontAwesomeIcon icon={faLock} size="4x"/>
                                        </Grid>
                                        <Grid item>
                                    <TextField
                                        value={this.state.password}
                                        onChange={e => this.setState({ password: e.target.value })}
                                        id="login-password-field"
                                        fullWidth
                                        style={{ margin: 8 }}
                                        className="login-field"
                                        placeholder="Slaptažodis"
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            </form>
                                <Link to="/home/emailPage">
                                <Button variant="contained" class="login-button login-button-login">
                                    PRISIJUNGTI
                                </Button>
                        </div>
                        <div class="login-cant-login-text">
                            Nepavyksta prisijungti?
                        </div>
                    </Typography>
                </Container>
            </React.Fragment>
            </div>
        );
    }

    loginVerification() {
        var user = {
            Email: this.state.userName,
            Password: this.state.password
        }

        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == XMLHttpRequest.DONE) {
                //handle data
                //request.responseText
            }
        }
        request.open('POST', 'Users/Login', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(JSON.stringify(user));
    }
}