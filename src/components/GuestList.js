import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

const useStyles = makeStyles(() => ({
    
}));

const GuestList = () => {
    const classes = useStyles();
    return(
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PersonRoundedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Ella Labadie" secondary="June 30, 2020" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PersonRoundedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Clementina Shanahan" secondary="June 30, 2020" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PersonRoundedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Winona Jerde" secondary="June 29, 2020" />
            </ListItem>
        </List>
    );
};

export default GuestList;