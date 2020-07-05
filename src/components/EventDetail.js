import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Card, Grid, Typography } from '@material-ui/core';

import { firebaseURL } from '../Config';
import GuestList from './GuestList';
import TaskList from './TaskList';
import map from '../assets/map.png';

const useStyles = makeStyles((theme) => ({
    header: {
        marginTop: '1rem'
    },
    email: {
        marginBottom: '1rem '
    },
    guestList: {
        marginTop: '2.5rem'
    }
}));

const EventDetail = () => {
    const classes = useStyles();
    const { id } =  useParams();

    const [event, setEvent] = useState({});

    useEffect(() => {
        async function getEvents() {
            try{
                const { data } = await axios.get(firebaseURL + '/events/' + id + '.json');

                setEvent(data);
            } catch(err){
                console.error(err);
            }
        }

        getEvents();
    }, [""]);

    return(
        <Container>
            <Grid className={classes.header} component={Paper} container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <img src={map} alt="Map" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" component="p" gutterBottom>
                        {event.name}
                    </Typography>
                    <Typography className={classes.email} variant="subtitle1" component="p" gutterBottom>
                        {event.description}
                    </Typography>
                    <Typography className={classes.email} variant="subtitle1" component="p" gutterBottom>
                        {event.location}
                    </Typography>
                    <Typography className={classes.email} variant="subtitle1" component="p" gutterBottom>
                        {event.date} at {event.time}
                    </Typography>
                    <Typography className={classes.email} variant="subtitle1" component="p" gutterBottom>
                        by Joe Doe
                    </Typography>
                </Grid>
            </Grid>
            <Grid className={classes.guestList} container spacing={4}>
                <Grid className={classes.center} component={Card} item xs={12} sm={6}>
                    <Typography className={classes.email} variant="h4" component="h2" gutterBottom>
                        Guests
                    </Typography>
                    <GuestList />
                </Grid>
                <Grid className={classes.center} component={Card} item xs={12} sm={6}>
                    <Typography className={classes.email} variant="h4" component="h2" gutterBottom>
                        Tasks
                    </Typography>
                    <TaskList />
                </Grid>
            </Grid>
            
        </Container>
    );
};

export default EventDetail;