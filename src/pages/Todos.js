import React, { useState, useEffect } from 'react';
import { Typography, Grid, List } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
// import whyDidYouRender from "@welldone-software/why-did-you-render";

import { Container, TodoForm, Todo, Title } from '../components';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useFetchedData from '../hooks/useFetchedData';

const useStyles = makeStyles(theme =>
  createStyles({
    progress: {
      margin: theme.spacing(2),
      color: '#D5AC4E',
    },
    list: {
      margin: '0 auto',
      maxWidth: '600px',
    },
  }),
);

// whyDidYouRender(React, {
//   titleColor: "green",
//   logOnDifferentValues: true,
// });

const Todos = () => {
  useDocumentTitle('Todos');
  const [initialTodos, isLoading, error] = useFetchedData();
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    setTodos(initialTodos);
  }, [initialTodos]);

  const addTodo = title => {
    const newTodos = [...todos];
    newTodos.splice(0, 0, {title, completed: false});
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
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
        <Grid container direction="column" alignItems="center" justify="center">
          <Title>Todos</Title>
          <TodoForm addTodo={addTodo} />
        </Grid>
        {isLoading && <div data-testid="todos-loading">Loading...</div>}
        {!isLoading && !error && (
            <List className={classes.list} data-testid="todos-list">
            {todos.map((todo, index) => (
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                />
              ))}
            </List>
          )
        }
        {error && <div>{error}</div>}
      </Grid>
    </Container >
  )
}

// Todos.whyDidYouRender = true;

export default React.memo(Todos);
