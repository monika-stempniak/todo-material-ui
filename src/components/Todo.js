import React from "react";
import { Typography, ListItem, IconButton } from "@material-ui/core";
import { CheckCircleOutline, DeleteOutline } from "@material-ui/icons";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex"
    },
    todo: props => ({
      textDecoration: props.completed ? "line-through" : "none",
      flex: 1,
      cursor: "pointer"
    }),
    completeIcon: props => ({
      color: "#ad8c0e",
      visibility: props.completed ? "visible" : "hidden",
      cursor: "auto",
      padding: theme.spacing(1.5)
    }),
    deleteIcon: {
      color: "#c71c10"
    }
  })
);

const joinWords = word => {
  return word
    .toLowerCase()
    .split(" ")
    .join("-");
};

const Todo = ({ todo, index, toggleTodo, deleteTodo }) => {
  const { title, completed } = todo;
  const classes = useStyles({ completed });

  return (
    <ListItem className={classes.container}>
      <CheckCircleOutline
        className={classes.completeIcon}
        data-testid={`completed-${joinWords(title)}`}
      />
      <Typography
        variant="body1"
        className={classes.todo}
        data-testid={`todo-${joinWords(title)}`}
        data-toggle="toggle"
        data-completed={completed ? "completed" : null}
        onClick={() => toggleTodo(index)}
      >
        {title}
      </Typography>
      <IconButton
        onClick={() => deleteTodo(index)}
        className={classes.deleteIcon}
        data-testid={`delete-${joinWords(title)}`}
        data-delete="delete-todo"
      >
        <DeleteOutline />
      </IconButton>
    </ListItem>
  );
};

export default Todo;
