import React from 'react';
import { Typography } from '@material-ui/core';

import { Container } from '../components';
import useDocumentTitle from '../hooks/useDocumentTitle';

const NotFound = () => {
  useDocumentTitle('Not found');

  return (
    <Container>
      <Typography variant="h5" data-testid="not-found-title">
        Page not found
      </Typography>
    </Container>
  );
}

export default NotFound;
