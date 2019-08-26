import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { render, fireEvent, act } from '@testing-library/react';

import { About, NotFound, Todos } from './pages';
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

      expect(getByTestId('todos-title').innerHTML).toMatch('Todos');
    });

    test('should navigate from /todos to /about page', () => {
      const { getByTestId, getByText } = render(<App />);

      fireEvent.click(getByText(/about/i), { button: 0 });
      expect(getByTestId('about-title').innerHTML).toMatch('About');
    });

    test('should land on a not found page when route is wrong', () => {
      history.push('/some-route');
      const { getByTestId } = render(<App />);

      expect(getByTestId('not-found-title').innerHTML).toMatch('Page not found');
    });
});
