import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

import { firebaseURL } from '../Config';
import map from '../assets/map.png';

const useStyles = makeStyles((theme) => ({
    header: {
        marginTop: '1rem'
    },
    email: {
        marginBottom: '1rem '
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
            <Grid className={classes.header} container spacing={4}>
                <Grid className={classes.center} item xs={12} sm={6}>
                    <img src={map} alt="Map" />
                </Grid>
                <Grid className={classes.center} item xs={12} sm={6}>
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
                </Grid>
            </Grid>
        </Container>
    );
};

export default EventDetail;