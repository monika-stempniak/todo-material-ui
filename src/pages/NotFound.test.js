import React from 'react';
import { render } from '@testing-library/react';

import { NotFound } from '.';

describe('NotFound component', () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });
});
