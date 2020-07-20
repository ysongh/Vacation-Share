import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemText, IconButton, Avatar } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
    textLeft: {
        textAlign: 'right'
    }
}));

const TaskList = ({ tasks, deleteTask }) => {
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
                    <IconButton edge="end" className={classes.menuButton} color="secondary" aria-label="delete" onClick={deleteTask} value={task.id} >
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;