var React = require('react');
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default class Base extends React.Component{
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container class="login-body" maxWidth="sm">
                    <Typography class="login-typography" component="div" style={{ backgroundColor: '#fff' }}>
                        <div class="login-header">
                            <a>
                                <img src="https://sso.vu.lt/SSO/module.php/themevu/logo_sso_lt.svg" alt="logo"/>
                            </a>
                        </div>
                        <div class="login-text-confirm">
                            Paslaugai reikalingas Jūsų tapatybės patvirtinimas
                        </div>
                        <div class="login-buttons-choose">
                            <Link to="/login">
                                <Button variant="contained" class="login-button login-button-worker">
                                    VU DARBUOTOJAI
                                </Button>
                            </Link>
                            <Link to="/login">
                                <Button variant="contained" color="primary" class="login-button login-button-student">
                                    VU STUDENTAI
                                </Button>
                            </Link>
                        </div>
                        <div class="login-cant-login-text">
                            Nepavyksta prisijungti?
                        </div>
                        </Typography>
                </Container>
            </React.Fragment>
        );
    }
}