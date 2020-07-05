import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

const useStyles = makeStyles(() => ({
    textLeft: {
        textAlign: 'right'
    }
}));

const TaskList = () => {
    const classes = useStyles();
    return(
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PersonRoundedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Ella Labadie" secondary="Get Soda" />
                <ListItemText className={classes.textLeft} edge="end" primary="Completed" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PersonRoundedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Clementina Shanahan" secondary="Get Soda" />
                <ListItemText className={classes.textLeft} edge="end" primary="Pending" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PersonRoundedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Winona Jerde" secondary="Get Soda" />
                <ListItemText className={classes.textLeft} edge="end" primary="Completed" />
            </ListItem>
        </List>
    );
};

export default TaskList;