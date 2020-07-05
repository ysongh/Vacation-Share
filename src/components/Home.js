import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Grid, Box, Button, Typography } from '@material-ui/core';

import heroBackground from '../assets/hero-background.png';
import discover1 from '../assets/discover1.png';
import discover2 from '../assets/discover2.png';
import discover3 from '../assets/discover3.png';
import discover4 from '../assets/discover4.png';

const useStyles = makeStyles(() => ({
    title: {
        marginTop: '2rem',
    },
    subTitle: {
        marginTop: '1.5rem',
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
                    <Button component={Link} to="/register" variant="contained" color="primary" size="large">
                        Get Started
                    </Button>
                </Box>
            </Paper>

            <Container>
                <Typography className={classes.subTitle} variant="h4" component="h2" gutterBottom>
                    Discover
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={6} md={3}>
                        <img src={discover1} alt="Lake"/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={discover2} alt="Lake"/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={discover3} alt="Lake"/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={discover4} alt="Lake"/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Home;