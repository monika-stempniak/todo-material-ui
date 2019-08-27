import React from 'react';
import { Typography } from '@material-ui/core';

import { Container, Title } from '../components';
import useDocumentTitle from '../hooks/useDocumentTitle';

const NotFound = () => {
  useDocumentTitle('Not found');

  return (
    <Container>
      <Title>Page not found</Title>
    </Container>
  );
}

export default NotFound;
