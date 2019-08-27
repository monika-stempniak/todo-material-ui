import React, { useContext } from 'react';
import { Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Context from '../store/context';

const useStyles = makeStyles(theme =>
  createStyles({
    button: {
      border: '1px solid #D5AC4E',
      borderRadius: 3,
      color: '#D5AC4E',
      marginTop: 20,
    },
  }),
);

const Paragraph = ({ children }) => {
  const classes = useStyles();
  const context = useContext(Context);

  return (
    <>
      <Typography variant="body1" gutterBottom>
        {children}
      </Typography>
      <Typography variant="body1" gutterBottom data-testid='additional-text'>
        {context.text}
      </Typography>
      {!context.text && (
        <Button
          variant="outlined"
          onClick={context.showText}
          className={classes.button}
          size='small'
        >
          Show more
        </Button>
      )}
    </>
  );
}

export default Paragraph;
