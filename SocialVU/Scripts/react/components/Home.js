import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const styles = theme => ({
    root: {
        flexGrow: 1,
        height:80
    },
    menuButton: {
        marginRight: theme.spacing(2),
        fontSize: 18,
        height: 80,
        marginRight: 30,
        padding: 0
    },
    largeIcon: {
        width: 40,
        height: 40
    },
    title: {
        flexGrow: 1,
        fontSize: 25,
        marginLeft: 15
    },
    appBar: {
        backgroundColor: 'rgba(120, 0, 63, 0.9)',
        color: '#ffffff'
    },
    toolbar: {
    },
    menuButtonLogOff: {
        fontSize: 18,
        marginLeft: 25,
        
    }
});

class Home extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const { classes } = this.props
        return (

            <div className={classes.root}>
                <AppBar className={classes.appBar}position="static">
                    <Toolbar className={classes.toolbar}>
                        <IconButton edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon className={classes.largeIcon} />
                        </IconButton >
                        <Typography variant="h6" className={classes.title}>
                            Vilniaus Universitetas SocialVU
                            </Typography>
                        <Button className={classes.menuButton} color="inherit">Naujienos</Button>
                        <Button className={classes.menuButton} color="inherit">Renginiai</Button>
                        <Button className={classes.menuButton} color="inherit">Dėstytojų puslapiai</Button>
                        <Button className={classes.menuButton} color="inherit">Paštas</Button>
                        <Button className={classes.menuButtonLogOff} color="inherit">
                            <FontAwesomeIcon size="1x" icon={faSignOutAlt} />
                            <span className="margin-left-10">
                            Atsijungti
                            </span>    
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

}


export default withStyles(styles)(Home)