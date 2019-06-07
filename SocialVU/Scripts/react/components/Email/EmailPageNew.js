import { Link } from "react-router-dom";
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CalenderIcon from '@material-ui/icons/CalendarToday';
import LocationIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

import EmailOptions from './EmailOptions';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 900,
        fontSize: 20,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
        fontSize: 20,
        textAlign: 'center',
        textcolor: '#d32f2f',
        marginBottom: theme.spacing(3)
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    card: {
        width: '100%',
        height: 250,
        marginBottom: theme.spacing(3)

    },
    icon: {
        marginRight: theme.spacing(1),
        color: '#9e9e9e',

    },
    text: {
        fontSize: 10,
    },
    decriptionText: {
        fontSize: 12,
    },
    divider: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    pageTitle: {
        marginBottom: theme.spacing(3),
    },
    stickyHeader: {
        fontSize: 20
    },
    emailListItemClickAction: {
        display: 'block',
        textAlign: 'initial',
        width: '100%'
    }
});


class EmailPageNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                { key: 1, title: "testas", sender:"karolis.petrauskas@mif.dest.vu.lt", description: "aprašymas1", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 2, title: "testas", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas2", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 3, title: "testas", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas3", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 4, title: "testas", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas4", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 5, title: "testas", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas5", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 6, title: "testas", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas6", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 7, title: "testas", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas7", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 8, title: "testas", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas8", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
            ],
            openDialog: false,
            dialogIndex: 0,
            messageIndex: 0
        }
    }
    render() {
        const { classes } = this.props
        const bull = <span className={classes.bullet}>•</span>;
        return (
            <div class="email">
                <div class="email-options">
                    <EmailOptions />
                </div>
                <div class="email-list">
                <List className={classes.root} subheader={<li />}>
                    {[0].map(sectionId => (
                        <li key={`section-${sectionId}`} className={classes.listSection}>
                            <ul className={classes.ul}>
                                <ListSubheader className={classes.stickyHeader}>{`I'm sticky ${sectionId}`}</ListSubheader>
                                {this.state.events.map((event, index) => (
                                    <Grid >
                                            <Card className={classes.card} key={index}>
                                                <ButtonBase
                                                    className={classes.emailListItemClickAction}
                                                    onClick={() => {
                                                        this.setState({ messageIndex: index },
                                                            function () {
                                                                console.log(this.state.messageIndex);
                                                            });
                                                    }}
                                                >
                                                    <CardContent>
                                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                                        <Typography className={classes.title} color="secondary" >
                                                            {event.title}
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            direction="row"
                                                        >
                                                            <CalenderIcon className={classes.icon} />
                                                            <Typography className={classes.text} color="primary" >Data: {event.date} {event.time}</Typography>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            direction="row"
                                                        >
                                                            <LocationIcon className={classes.icon} />
                                                            <Typography className={classes.text} color="primary"> Vieta: {event.location} </Typography>
                                                        </Grid>
                                                        <Divider className={classes.divider} />
                                                        <Typography className={classes.decriptionText}>
                                                {event.description}
                                                        </Typography>
                                                    </CardContent>
                                                </ButtonBase>
                                            </Card>
                                        </Grid>
                                    ))}
                            </ul>
                        </li>
                    ))}
                    </List>
                </div>
                <div>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Word of the Day
                                </Typography>
                            <Typography variant="h5" component="h2">
                                {this.state.events[this.state.messageIndex].description}
                                </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                adjective
                                </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                
            </div>
        );
    }
}

export default withStyles(styles)(EmailPageNew);