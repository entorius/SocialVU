import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
    root: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: theme.spacing(3),
    },
    paper: {
        width: '90%',
        marginTop: theme.spacing(3),
        marginLeft: '3%',
        marginRight: '3%',
        alignItems: "center",
        justify: "center"
    },
    table: {
        width: '100%'
    },
    tableRow: {
        borderColor: theme.palette.grey[300],
        border: '1.4px solid',
        height: '60px'
    },
    text: {
        fontSize: 14,
    },
    columnTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    titleCell: {
        backgroundColor: theme.palette.primary
    }

})

class LecturesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lecturesInfo: [
                { name: "testas", subject: 'psi', website: "http://klevas.mif.vu.lt/~karolis/", credits: "5", examDate: "2019-06-01" },
                { name: "testas", subject: 'psi', website: "http://klevas.mif.vu.lt/~karolis/", credits: "5", examDate: "2019-06-01" },
                { name: "testas", subject: 'psi', website: "http://klevas.mif.vu.lt/~karolis/", credits: "5", examDate: "2019-06-01" },
                { name: "testas", subject: 'psi', website: "http://klevas.mif.vu.lt/~karolis/", credits: "5", examDate: "2019-06-01" },
                { name: "testas", subject: 'psi', website: "http://klevas.mif.vu.lt/~karolis/", credits: "5", examDate: "2019-06-01" },
                { name: "testas", subject: 'psi', website: "http://klevas.mif.vu.lt/~karolis/", credits: "5", examDate: "2019-06-01" },
                { name: "testas", subject: 'psi', website: "http://klevas.mif.vu.lt/~karolis/", credits: "5", examDate: "2019-06-01" },
                { name: "testas", subject: 'psi', website: "http://klevas.mif.vu.lt/~karolis/", credits: "5", examDate: "2019-06-01" },
            ]
        }
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Typography color="secondary" variant="h3">Lectures</Typography >
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center" >
                    <Paper className={classes.paper}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.titleCell}>
                                        <Typography color="secondary" className={classes.columnTitle}>Subject</Typography>
                                    </TableCell>
                                    <TableCell className={classes.titleCell}>
                                        <Typography color="secondary" className={classes.columnTitle}>Credits</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="secondary" className={classes.columnTitle}>Lecturers</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="secondary" className={classes.columnTitle}>Website</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="secondary" className={classes.columnTitle}>Exam Date</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.lecturesInfo.map((row, index) => (
                                    <TableRow key={index} className={classes.tableRow}>
                                        <TableCell>
                                            <Typography className={classes.columnTitle} >{row.subject}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text} >{row.credits}</Typography>
                                        </TableCell>
                                        <TableCell className={classes.text}>
                                            <Typography className={classes.text} >{row.name}</Typography>
                                        </TableCell>
                                        <TableCell className={classes.text}>
                                            <Typography className={classes.text} >{row.examDate}</Typography>
                                        </TableCell>
                                        <TableCell className={classes.text}>
                                            <a href={row.website}>
                                                <IconButton>
                                                    <InfoIcon />
                                                </IconButton>
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper >
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(LecturesPage)