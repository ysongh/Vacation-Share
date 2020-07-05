import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Drawer, Toolbar, IconButton, List, ListItem, ListItemText, Typography, Button } from '@material-ui/core';
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
    sideDrawer: {
        minWidth: '15rem'
    }
}));

const Navbar = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <Button component={RouterLink} to="/" color="inherit">
                            Vacation Share
                        </Button>
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    </Toolbar>
                </Container>

                <Drawer anchor="right" open={open} onClick={() => setOpen(false)} onClose={() => setOpen(false)} onKeyDown={() => setOpen(false)}>
                    <List className={classes.sideDrawer} component="nav">
                        <ListItem button component={RouterLink} to="/">
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={RouterLink} to="/login">
                            <ListItemText primary="Login" />
                        </ListItem>
                        <ListItem button component={RouterLink} to="/register">
                            <ListItemText primary="Register" />
                        </ListItem>
                    </List>
                </Drawer>
            </AppBar>
        </div>
    );
};

export default Navbar;