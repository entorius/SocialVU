import { Link } from "react-router-dom";
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});
class EmailOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: null };
    }
    updateSelected(selectedIndex) {
        this.setState({ selected: selectedIndex });
    }
    
    render() {
        const { classes } = this.props;
        const { selected } = this.state;
        return (
            < div className={classes.root} >
                <List component="nav" aria-label="Main mailbox folders">
                    <ListItem
                        button
                        onClick={() => this.updateSelected(0)}
                        selected={selected === 0}
                    >
                        <ListItemIcon>
                            <SendIcon className="email-options-icon" />
                        </ListItemIcon>
                        <ListItemText className="email-options-text" primary="Send" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => this.updateSelected(0)}
                        selected={selected === 1}
                    >
                        <ListItemIcon>
                            <InboxIcon className="email-options-icon"/>
                        </ListItemIcon>
                        <ListItemText className="email-options-text" primary="Inbox" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => this.updateSelected(0)}
                        selected={selected === 2}
                    >
                        <ListItemIcon>
                            <DraftsIcon className="email-options-icon"/>
                        </ListItemIcon>
                        <ListItemText className="email-options-text" primary="Drafts" />
                    </ListItem>
                </List>
                <Divider />
                <List component="nav" aria-label="Secondary mailbox folder">
                    <ListItem
                        button
                        onClick={() => this.updateSelected(0)}
                        selected={selected === 3}
                    >
                        <ListItemText className="email-options-text" primary="Trash" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => this.updateSelected(0)}
                        selected={selected === 4}
                    >
                        <ListItemText className="email-options-text" primary="Spam" />
                    </ListItem>
                </List>
            </div >
        );

    }
}
export default withStyles(styles)(EmailOptions);