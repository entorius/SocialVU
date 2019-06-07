var React = require('react');
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area:800
            }
        }
    }
}

export default class Base extends React.Component{
    render() {
        return (
            <div class="particles-login">
                <Particles
                    params={particleOpt}
                />
                <div>
                <React.Fragment>
                    
                <CssBaseline />
                    <Container className="login-body" maxWidth="sm">
                        
                    <Typography className="login-typography" component="div" style={{ backgroundColor: '#fff' }}>
                        <div className="login-header">
                            <a>
                                <img src="https://sso.vu.lt/SSO/module.php/themevu/logo_sso_lt.svg" alt="logo"/>
                            </a>
                        </div>
                        <div className="login-text-confirm">
                            Paslaugai reikalingas Jūsų tapatybės patvirtinimas
                        </div>
                        <div className="login-buttons-choose">
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
                        <div className="login-cant-login-text">
                            Nepavyksta prisijungti?
                        </div>
                    </Typography>
                </Container>
                </React.Fragment>
                </div>
                </div>
        );
    }
}