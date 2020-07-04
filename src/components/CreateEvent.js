import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';

import {firebaseURL} from '../Config';
import TextInputField from './common/TextInputField';

const useStyles = makeStyles(() => ({
    container: {
        marginTop: '2rem',
    },
    form:{
        marginBottom: '1rem'
    },
    title: {
        marginTop: '1.5rem',
    },
}));

const CreateEvent = () => {
    const classes = useStyles();
    const history = useHistory();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [size, setSize] = useState(1);

    const onSubmit = async () => {
        try{
            const userInfo = {
                name,
                description,
                date,
                time,
                location,
                size
            }
            
            await axios.post(firebaseURL + '/events.json', userInfo);

            history.push("/profile");
        } catch(err){
            console.error(err);
        }
      };

    return(
        <Grid className={classes.container} container justify="center">
            <Grid item xs={12} sm={8} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" paragraph>
                            Create Event
                        </Typography>
                        <form noValidate className={classes.form}>
                            <TextInputField
                                label="Name of Event"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextInputField
                                label="Description"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <TextInputField
                                label=""
                                name="date"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <TextInputField
                                label=""
                                name="time"
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                            <TextInputField
                                label="Location"
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <TextInputField
                                label="Number of People"
                                name="size"
                                text="number"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                            />
                        </form>
                        <Button onClick={() => onSubmit()} type="submit" variant="contained" color="primary">
                            Create
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default CreateEvent;