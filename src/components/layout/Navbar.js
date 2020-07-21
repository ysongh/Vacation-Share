import React, { useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Drawer, Toolbar, IconButton, List, ListItem, ListItemText, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { GlobalContext } from '../../context/GlobalState';
import { primaryColor } from '../../config/color';
import Logo from '../../assets/logo.svg';

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
    },
    appBar: {
        backgroundColor: primaryColor
    },
    logo: {
        width: '100px'
    }
}));

const Navbar = () => {
    const { user, logout } = useContext(GlobalContext);
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const guestNavbar = (
        <List className={classes.sideDrawer} component="nav">
            <ListItem>
                <img className={classes.logo} src={Logo} alt="Logo" />
            </ListItem>
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
    );

    const userNavbar = (
        <List className={classes.sideDrawer} component="nav">
            <ListItem>
                <img className={classes.logo} src={Logo} alt="Logo" />
            </ListItem>
            <ListItem button component={RouterLink} to="/">
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={RouterLink} to="/profile">
                <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button component={RouterLink} to="/" onClick={() => logout()}>
                <ListItemText primary="Logout" />
            </ListItem>
        </List>
    );

    return(
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Container>
                    <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <Button component={RouterLink} to="/" color="inherit">
                            <img className={classes.logo} src={Logo} alt="Logo" />
                        </Button>
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    </Toolbar>
                </Container>

                <Drawer anchor="right" open={open} onClick={() => setOpen(false)} onClose={() => setOpen(false)} onKeyDown={() => setOpen(false)}>
                    {user.email ? userNavbar : guestNavbar }
                </Drawer>
            </AppBar>
        </div>
    );
};

export default Navbar;