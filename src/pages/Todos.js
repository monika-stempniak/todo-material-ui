import React, { useState } from 'react';
import { Typography, Grid, List } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Container, TodoForm, Todo } from '../components';

const useStyles = makeStyles(theme =>
  createStyles({
    list: {
      margin: '0 auto',
      maxWidth: '600px',
    },
  }),
);

const Todos = () => {
  const initialTodos = [
    {
      text: 'Learn React Hooks',
      isCompleted: false
    },
    {
      text: 'Learn unit tests',
      isCompleted: false
    },
    {
      text: 'Learn Material UI',
      isCompleted: false
    }
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = text => {
    const newTodos = [...todos];
    newTodos.splice(0, 0, {text, isCompleted: false});
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="column" alignItems="center" justify="center">
        <Typography variant="h5">
          Todos
        </Typography>
        <TodoForm addTodo={addTodo} />
      </Grid>
      <List className={classes.list}>
      {
        todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))
      }
      </List>
    </Container >
  )
}

export default Todos;