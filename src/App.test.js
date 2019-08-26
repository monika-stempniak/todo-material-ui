import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';

import { About, NotFound, Todos } from './pages';
import App from './App';

const history = createBrowserHistory();

test('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should navigate from /todos to /about page', () => {
  const { getByTestId, getByText } = render(<App />);
  expect(getByTestId('todos-title').innerHTML).toMatch('Todos');
  const leftClick = { button: 0 };
  fireEvent.click(getByText(/about/i), leftClick);
  expect(getByTestId('about-title').innerHTML).toMatch('About');
})

test('should land on a not found page when route is wrong', () => {
  history.push('/some-route');
  const { getByTestId } = render(<App />);
  expect(getByTestId('not-found-title').innerHTML).toMatch('Page not found');
})
