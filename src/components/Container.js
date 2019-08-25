import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 0),
    },
  }),
);

const MainContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      {children}
    </Container>
  )
}

export default MainContainer;