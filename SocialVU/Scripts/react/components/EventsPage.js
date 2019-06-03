import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CalenderIcon from '@material-ui/icons/CalendarToday';
import LocationIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
    root: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: theme.spacing(3),
    },
    card: {
        width: 300,
        height: 250,
        marginBottom: theme.spacing(3)

    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        textcolor: '#d32f2f',
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

});

class EventsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                { title: "testas", description: "aprašymas", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { title: "testas", description: "aprašymas", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { title: "testas", description: "aprašymas", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { title: "testas", description: "aprašymas", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { title: "testas", description: "aprašymas", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { title: "testas", description: "aprašymas", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { title: "testas", description: "aprašymas", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { title: "testas", description: "aprašymas", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
            ],
            openDialog: false,
            dialogIndex: 0
        }
    }

    render() {
        const { classes } = this.props
        return (

            <div className={classes.root}>

                <Typography color="secondary" variant="h3" className={classes.pageTitle}>Events</Typography >
                <Grid container spacing={24}>
                    {this.state.events.map((event, index) =>
                        <Grid item xs={4}>
                            <Card className={classes.card} key={index}>
                                <CardContent>
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

                            </Card>
                        </Grid>)}
                </Grid>
            </div>

        )
    }

}


export default withStyles(styles)(EventsPage)