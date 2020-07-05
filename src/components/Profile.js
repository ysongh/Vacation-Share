import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Avatar, Typography, Button } from '@material-ui/core';

import { firebaseURL } from '../Config';
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

    const [events, setEvents] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function getEvents() {
            try{
                const { data } = await axios.get(firebaseURL + '/events.json');
                const eventsList = [];
    
                for (let key in data){
                    eventsList.unshift({
                        ...data[key],
                        id: key
                    });
                }

                setEvents(eventsList);
            } catch(err){
                console.error(err);
            }
        }

        async function getTasks() {
            try{
                const { data } = await axios.get(firebaseURL + '/tasks.json');
                const tasksList = [];
    
                for (let key in data){
                    tasksList.unshift({
                        ...data[key],
                        id: key
                    });
                }

                setTasks(tasksList);
            } catch(err){
                console.error(err);
            }
        }

        getEvents();
        getTasks();
    }, [""]);

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
                    <Button component={Link} to="/create-event" variant="contained" color="secondary" size="large">
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
                                {events.map((event) => (
                                    <TableRow key={event.id}>
                                        <TableCell component="th" scope="row">
                                            {event.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button component={Link} to={`/event/${event.id}`} variant="contained" color="primary" size="large">
                                                See Detail
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
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
                                {tasks.map((task) => (
                                    <TableRow key={task.id}>
                                        <TableCell component="th" scope="row">
                                            {task.description}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button component={Link} to={`/event/${task.eventId}`} variant="contained" color="primary" size="large">
                                                See Event
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;