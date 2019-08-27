import React from 'react';
import { render } from '@testing-library/react';
import { createBrowserHistory } from 'history';

import Context from '../store/context';
import { About } from '.';
import App from '../App';

const history = createBrowserHistory();

describe('About component', () => {
  it("matches snapshot", () => {
    history.push('/about');
    const { asFragment } = render(
      <App>
        <Context.Provider>
          <About />
        </Context.Provider>
      </App>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
