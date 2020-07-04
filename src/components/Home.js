import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Button, Typography } from '@material-ui/core';

import heroBackground from '../assets/hero-background.png';

const useStyles = makeStyles(() => ({
    title: {
        marginTop: '2rem',
    },
    heroBackground:{
        height: '50vh',
        backgroundImage: `url(${heroBackground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '3rem 2rem'
    }
}));

const Home = () => {
    const classes = useStyles();
    return(
        <>
            <Paper className={classes.heroBackground} elevation={3}>
                <Typography className={classes.title} variant="h4" component="h1" gutterBottom align="center">
                    Plan your dream vacation with your family and friends
                </Typography>
                <Box display="flex" justifyContent="center" mt="2rem">
                    <Button variant="contained" color="primary" size="large">
                        Get Started
                    </Button>
                </Box>
            </Paper>
        </>
    );
};

export default Home;