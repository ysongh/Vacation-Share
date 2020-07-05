import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

const useStyles = makeStyles(() => ({
    textLeft: {
        textAlign: 'right'
    }
}));

const TaskList = ({ tasks }) => {
    const classes = useStyles();
    return(
        <List className={classes.root}>
            {tasks.map((task) => (
                <ListItem key={task.id}>
                    <ListItemAvatar>
                        <Avatar>
                            <PersonRoundedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={task.name} secondary={task.description} />
                    <ListItemText className={classes.textLeft} edge="end" primary={task.type} />
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;