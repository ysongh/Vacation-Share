import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Avatar, Typography, Button } from '@material-ui/core';

import discover1 from '../assets/discover1.png';

const useStyles = makeStyles((theme) => ({
    header: {
        marginTop: '1rem'
    },
    avatar: {
        width: '175px',
        height: '175px'
    },
    email: {
        marginBottom: '1rem '
    },
    tableOption: {
        fontSize: '1.5rem',
        color: 'blue'
    },
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

const Profile = () => {
    const classes = useStyles();

    return(
        <Container>
            <Grid className={classes.header} container spacing={1} justify="center">
                <Grid className={classes.center} item xs={12} sm={6}>
                    <Avatar className={classes.avatar} src={discover1} alt="Person" />
                </Grid>
                <Grid className={classes.center} item xs={12} sm={6}>
                    <Typography variant="h4" component="p" gutterBottom>
                        Joe Doe
                    </Typography>
                    <Typography className={classes.email} variant="subtitle1" component="p" gutterBottom>
                        joedoe@example.com
                    </Typography>
                    <Button component={Link} variant="contained" color="secondary" size="large">
                        Add Event
                    </Button>
                </Grid>
            </Grid>
            <Grid className={classes.header} container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Events
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table className="" aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell className={classes.tableOption}>Upcoming</TableCell>
                                    <TableCell className={classes.tableOption} align="right">Past</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Fun Party
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="primary" size="large">
                                            See Detail
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Fun Party
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="primary" size="large">
                                            See Detail
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Fun Party
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="primary" size="large">
                                            See Detail
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Tasks
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table className="" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableOption}>Upcoming</TableCell>
                                    <TableCell className={classes.tableOption} align="right">Past</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Buy Soda
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="primary" size="large">
                                            See Detail
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Buy Soda
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="primary" size="large">
                                            See Detail
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Buy Soda
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="primary" size="large">
                                            See Detail
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;