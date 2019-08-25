import React from 'react';
import { Typography, ListItem, IconButton } from '@material-ui/core';
import { CheckCircleOutline, DeleteOutline } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    todo: props => ({
      textDecoration: props.isCompleted ? 'line-through' : 'none',
    }),
    checkIcon: {
      color: '#ad8c0e',
    },
    deleteIcon: {
      color: '#c71c10',
    }
  }),
);

const Todo = ({ todo, index, completeTodo, deleteTodo }) => {
  const { text, isCompleted } = todo;
  const classes = useStyles({isCompleted});

  return (
    <ListItem >
      <Typography variant="body1" className={classes.todo}>
        {text}
      </Typography>
      {
        isCompleted ? (
          <IconButton onClick={() => deleteTodo(index)} className={classes.deleteIcon}>
            <DeleteOutline />
          </IconButton>
        )
        : (
          <IconButton onClick={() => completeTodo(index)} className={classes.checkIcon}>
            <CheckCircleOutline />
          </IconButton>
        )
      }
    </ListItem>
  )
}

export default Todo;