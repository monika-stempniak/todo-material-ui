import React from 'react';
import { Typography } from '@material-ui/core';

const Title = ({ children }) => (
  <Typography variant="h5" gutterBottom data-testid="title">
    {children}
  </Typography>
);

export default Title;
