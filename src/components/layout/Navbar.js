import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        <Button component={RouterLink} to="/" color="inherit">
                            Vacation Share
                        </Button>
                    </Typography>
                        <Button component={RouterLink} to="/login" color="inherit">
                            Login
                        </Button>
                        <Button component={RouterLink} to="/register" color="inherit">
                            Get Started
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Navbar;