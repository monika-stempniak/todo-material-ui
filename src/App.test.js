import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';

import { About, NotFound, Todos } from './pages';
import Context from './store/context';
import App from './App';

const history = createBrowserHistory();

describe('App component', () => {

    test('should render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test('should automatically redirect to /todos page', () => {
      const { getByTestId } = render(<App />);

      expect(getByTestId('title').innerHTML).toMatch('Todos');
    });

    test('should navigate from /todos to /about page', () => {
      const { getByTestId, getByText } = render(<App />);

      fireEvent.click(getByText(/about/i), { button: 0 });
      expect(getByTestId('title').innerHTML).toMatch('About');
    });

    test('should land on a not found page when route is wrong', () => {
      history.push('/some-route');
      const { getByTestId } = render(<App />);

      expect(getByTestId('title').innerHTML).toMatch('Page not found');
    });
});

describe('Context', () => {
  test('value should showed by child component', () => {
    history.push('/about');
    const { getByTestId, getByText } = render(
      <App>
        <Context.Provider>
          <About />
        </Context.Provider>
      </App>
    );

    expect(getByTestId('additional-text').innerHTML).toBeFalsy();
    const showMoreButton = getByText(/Show more/i);
    fireEvent.click(showMoreButton, { button: 0 });
    expect(getByTestId('additional-text').innerHTML).toBeTruthy();
    expect(showMoreButton).not.toBeInTheDocument();
  });
});
