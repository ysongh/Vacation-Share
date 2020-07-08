import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';

import { primaryColor } from '../../config/color';

const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: '3rem',
        padding: '2rem 0',
        backgroundColor: primaryColor
    }
}));

const Footer = () => {
    const classes = useStyles();

    return(
        <footer>
            <AppBar className={classes.footer} position="static">
                <Typography variant="h6" align="center">
                    Copyright &copy;{new Date().getFullYear()} Vacation Share
                </Typography>
            </AppBar>
        </footer>
    );
};

export default Footer;