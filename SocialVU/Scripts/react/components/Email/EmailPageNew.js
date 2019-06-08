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
    titleListItem: {
        fontSize: 20,
        textAlign: 'center',
        textcolor: '#000000',
        marginBottom: theme.spacing(3)
    },
    titleParentListItem: {
        width:'100%',
        display:'flex'
    },
    contentListItem: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    descriptionListItem: {
        fontSize: 20,
        width:'70%',
        marginLeft: 60
    },
    dateListItem: {
        width: '30%'
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    card: {
        height: '90%',
        width: '100%',
        marginBottom: theme.spacing(3)

    },
    icon: {
        marginRight: theme.spacing(1),
        color: '#9e9e9e',

    },
    fromListItem: {
        color: '#414141',
        fontSize: 19,
        alignSelf:'center',
        width: '80%',
        marginLeft: 20
    },
    text: {
        fontSize: 10,
    },
    decriptionText: {
        marginLeft: 60,
        fontSize: '15px !important'
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
    },
    mailBodyFrom: {
        fontSize:25
    },
    mailBodyTo: {
        fontSize: 25
    },
    mailBodyDescription: {
        fontSize: 50
    },
    mailBodyText: {
        fontSize: 30
    }
});


class EmailPageNew extends React.Component {
    constructor(props) {
        super(props);
        this.getIncomingEmails();
        this.state = {
            events: [
                { key: 1, title: "testas", userEmail: "someone.getCool@gmail.com", sender:"karolis.petrauskas@mif.dest.vu.lt", description: "aprašymas1", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 2, title: "testas", userEmail: "someone.getCool@gmail.com", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas2", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 3, title: "testas", userEmail: "someone.getCool@gmail.com", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas3", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 4, title: "testas", userEmail: "someone.getCool@gmail.com", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas4", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 5, title: "testas", userEmail: "someone.getCool@gmail.com", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas5", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 6, title: "testas", userEmail: "someone.getCool@gmail.com", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas6", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 7, title: "testas", userEmail: "someone.getCool@gmail.com", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas7", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
                { key: 8, title: "testas", userEmail: "someone.getCool@gmail.com", sender: "karolis.petrauskas@mif.dest.vu.lt",description: "aprašymas8", date: "2019-05-29", time: "18:00", location: "Vilnius University" },
            ],
            incommingMessages: [{Date: "", Description: "", From: "", Id: 1, Text: "", To: ""}],
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
                                    {this.state.incommingMessages.map((incommingMessage, index) => (
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
                                                    <CardContent className={classes.contentListItem}>
                                                        <Avatar alt="Remy Sharp" src="../../../../Pictures/elon-user.jpg" />
                                                        <Typography className={classes.fromListItem} color="secondary" >
                                                            {incommingMessage.From}
                                                        </Typography>
                                                        <Grid className={classes.titleParentListItem}>
                                                            <Typography className={classes.descriptionListItem} color="secondary" >
                                                                {incommingMessage.Description}
                                                            </Typography>
                                                            <Grid
                                                                container
                                                                direction="row"
                                                                className={classes.dateListItem}
                                                            >
                                                                <CalenderIcon className={classes.icon} />
                                                                <Typography className={classes.text} color="primary" >Data: {incommingMessage.Date}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                       
                                                        <Typography className={classes.decriptionText}>
                                                            {incommingMessage.Text}
                                                        </Typography>
                                                       
                                                      
                                                        <Divider className={classes.divider} />
                                                        
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
                <div className="email-mail-body">
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.mailBodyFrom} color="textSecondary" gutterBottom>
                                From: {this.state.incommingMessages[this.state.messageIndex].From}
                            </Typography>
                            <Divider className={classes.divider} />
                            <Typography className={classes.mailBodyTo} color="textSecondary" gutterBottom>
                                To: {this.state.incommingMessages[this.state.messageIndex].To}
                            </Typography>
                            <Divider className={classes.divider} />
                            <Typography className={classes.mailBodyDescription} color="textSecondary" gutterBottom>
                                {this.state.incommingMessages[this.state.messageIndex].Description}
                            </Typography>
                            <Divider className={classes.divider} />
                            <Typography className={classes.mailBodyText} variant="h5" component="h2">
                                {this.state.incommingMessages[this.state.messageIndex].Text}
                                </Typography>
                        </CardContent>
                        
                    </Card>
                </div>
                
            </div>
        );
    }
    getIncomingEmails() {
        var userId = {
            Id: localStorage.getItem("userId")
        }

        var request = new XMLHttpRequest();
        self = this;
        request.onreadystatechange = function () {
            if (request.readyState == XMLHttpRequest.DONE) {
                //handle data
                var data = JSON.parse(request.responseText);
                for (var i = 0; i < data.length; i++) {
                    var date = new Date(parseInt(data[i].Date.substr(6)));
                    data[i].Date = date.toDateString();
                }
                console.log(data);
                self.setState({ incommingMessages: data });
                console.log(self.state.incommingMessages);
                //var message = JSON.parse(request.responseText);
                //console.log(new Date(parseInt(message[0].Date.substr(6))));
            }
        }
        request.open('GET', 'messages/received/' + localStorage.getItem("userId"), true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(localStorage.getItem("userId"));
        

    }
}

export default withStyles(styles)(EmailPageNew);