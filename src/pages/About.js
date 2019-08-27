import React from 'react';

import { Container, Title, Paragraph } from '../components';
import useDocumentTitle from '../hooks/useDocumentTitle';

const About = () => {
  useDocumentTitle('About');

  return (
    <Container>
      <Title>About</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nulla expedita eum sequi incidunt vitae quisquam dicta beatae, quas corrupti blanditiis sed excepturi iure sit assumenda. Cupiditate pariatur repellendus veritatis!
      </Paragraph>
    </Container>
  );
}

export default About;
