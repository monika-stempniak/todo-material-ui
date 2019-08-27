import React from 'react';
import { Typography } from '@material-ui/core';

import { Container, Title } from '../components';
import useDocumentTitle from '../hooks/useDocumentTitle';

const About = () => {
  useDocumentTitle('About');

  return (
    <Container>
      <Title>About</Title>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nulla expedita eum sequi incidunt vitae quisquam dicta beatae, quas corrupti blanditiis sed excepturi iure sit assumenda. Cupiditate pariatur repellendus veritatis!
      </Typography>
    </Container>
  );
}

export default About;
