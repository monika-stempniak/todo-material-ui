import React, { useState, useEffect } from "react";
import { Grid, List, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
// import whyDidYouRender from "@welldone-software/why-did-you-render";

import { Container, TodoForm, Todo, Title, Footer } from "../components";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useFetchedData from "../hooks/useFetchedData";

const useStyles = makeStyles(theme =>
  createStyles({
    progress: {
      margin: theme.spacing(2),
      color: "#D5AC4E"
    },
    list: {
      margin: "0 auto",
      width: "100%"
    }
  })
);

// whyDidYouRender(React, {
//   titleColor: "green",
//   logOnDifferentValues: true,
// });

const Todos = () => {
  const classes = useStyles();
  useDocumentTitle("Todos");
  const [initialTodos, isLoading, error] = useFetchedData();
  const [todos, setTodos] = useState(initialTodos);
  const [filteredTodos, setFilteredTodos] = useState(initialTodos);

  useEffect(() => {
    const todosData =
      initialTodos.length > 0 ? initialTodos.splice(0, 5) : initialTodos;
    setTodos(todosData);
    setFilteredTodos(todosData);
  }, [initialTodos]);

  const addTodo = title => {
    const newTodos = [...todos];
    newTodos.splice(0, 0, { title, completed: false });
    setTodos(newTodos);
    setFilteredTodos(newTodos);
  };

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    setFilteredTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setFilteredTodos(newTodos);
  };

  const showAllTodos = () => {
    setFilteredTodos(todos);
  };

  const showActiveTodos = () => {
    const activeTodos = todos.filter(todo => !todo.completed);
    setFilteredTodos(activeTodos);
  };

  const showCompletedTodos = () => {
    const completedTodos = todos.filter(todo => todo.completed);
    setFilteredTodos(completedTodos);
  };

  const getNumberOfTodosToComplete = () => {
    return todos.filter(todo => !todo.completed).length;
  };

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
            {filteredTodos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </List>
        )}
        {error && (
          <Typography
            variant="body1"
            className={classes.error}
            data-testid="error"
          >
            {error}
          </Typography>
        )}
        <Footer
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          remaining={getNumberOfTodosToComplete()}
        />
      </Grid>
    </Container>
  );
};

// Todos.whyDidYouRender = true;

export default React.memo(Todos);
