import React from 'react';
import { render } from '@testing-library/react';

import { About } from '.';

describe('About component', () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
