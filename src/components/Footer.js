import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    footer: {
      width: "100%"
    },
    grid: {
      margin: theme.spacing(2, 0),
      color: "gray",
      borderTop: "1px solid rgba(0, 0, 0, 0.42)"
    },
    button: {
      color: "gray"
    }
  })
);

const Footer = ({
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  remaining
}) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.grid}>
        <Grid item xs={6}>
          <Typography variant="body1" data-testid="todo-count">
            {remaining} {remaining === 1 ? "todo" : "todos"} left
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            className={classes.button}
            onClick={showAllTodos}
            data-testid="all-todos"
          >
            All
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            className={classes.button}
            onClick={showActiveTodos}
            data-testid="active-todos"
          >
            Active
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            className={classes.button}
            onClick={showCompletedTodos}
            data-testid="completed-todos"
          >
            Completed
          </Button>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
