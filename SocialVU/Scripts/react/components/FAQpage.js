import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
    root: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: theme.spacing(3),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    pageTitle: {
        marginBottom: theme.spacing(3),
    },
    title: {
        fontSize: 14,
    },
    expansionPanel: {

        width: '90%',
    },
    background: {
        backgroundColor: grey[100]
    }
});

class ControlledExpansionPanels extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {
            FAQs: this.getFAQs()
        }
    }

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography color="secondary" variant="h3" className={classes.pageTitle}>FAQ</Typography >
                {this.state.FAQs.map((FAQ, index) =>
                    <ExpansionPanel className={classes.expansionPanel} key={index}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography color="secondary" variant="h5" >
                                {FAQ.Question}
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.background}>
                            <Typography variant="h5">
                                {FAQ.Answer}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )}
            </div>
        );
    }
    getFAQs() {
        var request = new XMLHttpRequest();
        request.open('GET', 'faq/list', false);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send();

        var FAQs = JSON.parse(request.responseText)

        return FAQs;
    }

}

export default withStyles(styles)(ControlledExpansionPanels);