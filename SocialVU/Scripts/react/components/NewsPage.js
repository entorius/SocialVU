import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const styles = theme => ({
    root: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: theme.spacing(3),
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pageTitle: {
        marginBottom: theme.spacing(3),
    },
    dialog: {
        width: "600px",
        height: "600px"
    },
});

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: this.getNews()
        }
    }

    render() {
        const { classes } = this.props
        return (

            <div className={classes.root}>

                <Typography color="secondary" variant="h3" className={classes.pageTitle}>News</Typography >
                <div>
                    {this.state.news.map((n, index) =>
                        <Card className={classes.card} key={index} >
                            <CardActionArea >
                                <CardContent>
                                    <Typography color="secondary" variant="h5" >
                                        {n.Title}
                                    </Typography>
                                    <Typography className={classes.pos} >
                                        {n.Date.toString()}
                                    </Typography>
                                    <Typography variant="body1">
                                        {n.Description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    )}
                </div>
            </div>
        )
    }

    getNews() {
        var request = new XMLHttpRequest();
        request.open('GET', 'news/list', false);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send();
            
        var news = JSON.parse(request.responseText)

        news.forEach(n => {
            var date = new Date(parseInt(n.Date.substr(6)));
            var month = date.getMonth();
            month += 1;
            n.Date = date.getFullYear() + "/" + (month < "10" ? "0" + month : month) + "/" + (date.getDate() < "10" ? "0" + date.getDate() : date.getDate());
        })

        return news;
    }
}


export default withStyles(styles)(MainPage)