import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Card, Grid, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@material-ui/core';

import { firebaseURL } from '../Config';
import GuestList from './GuestList';
import TaskList from './TaskList';
import TextInputField from './common/TextInputField';
import map from '../assets/map.png';

const useStyles = makeStyles((theme) => ({
    header: {
        marginTop: '1rem'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    guestList: {
        marginTop: '2.5rem'
    }
}));

const EventDetail = () => {
    const classes = useStyles();
    const { id } =  useParams();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [event, setEvent] = useState({});
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    const onSubmit = async () => {
        try{
            const taskInfo = {
                name,
                description,
                type: 'Pending',
                eventId: id
            }
            
            await axios.post(firebaseURL + '/tasks.json', taskInfo);

            setName("");
            setDescription("");
            setOpen(false);
        } catch(err){
            console.error(err);
        }
    };

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
                <Grid component={Card} item xs={12} sm={6}>
                    <Box className={classes.title}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Tasks
                        </Typography>
                        <Button onClick={handleClickOpen} type="submit" variant="contained" color="primary">
                            Add
                        </Button>
                    </Box>
                    <TaskList />
                </Grid>
            </Grid>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Add Task</DialogTitle>

                <DialogContent>
                    <TextInputField
                        label="Name"
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
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => onSubmit()} color="primary">
                        Add
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Back
                    </Button>
                </DialogActions>
            </Dialog>
            
        </Container>
    );
};

export default EventDetail;