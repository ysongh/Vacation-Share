import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Avatar, Typography, Button } from '@material-ui/core';

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
        marginTop: '.8rem',
        marginBottom: '1rem '
    }
}));

const Profile = () => {
    const classes = useStyles();

    return(
        <Container>
            <Grid className={classes.header} container spacing={3} justify="center">
                <Grid item xs={12} md={3}>
                    <Avatar className={classes.avatar} src={discover1} alt="Person" />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h4" component="p" gutterBottom>
                        Joe Doe
                    </Typography>
                    <Typography className={classes.email} variant="subtitle1" component="p" gutterBottom>
                        joedoe@example.com
                    </Typography>
                    <Button component={Link} variant="contained" color="primary" size="large">
                        Add Event
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;