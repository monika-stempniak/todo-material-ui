import React from 'react';
import axios from 'axios';
import { render, fireEvent } from '@testing-library/react';
import { waitForDomChange } from '@testing-library/dom';

import { todos } from '../lib/todos-mock';
import { Todos } from '.';

jest.mock('axios');

describe('Todos component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({data: todos});
  });
  afterEach(() => {
    axios.get.mockReset();
  });

  it("matches snapshot", async () => {
    const { asFragment } = render(<Todos />);

    await waitForDomChange();
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render list of todos', async () => {
    const { getByTestId } = render(<Todos />);
    expect(getByTestId('todos-loading').innerHTML).toMatch('Loading...');

    await waitForDomChange();

    expect(axios.get).toHaveBeenCalledTimes(1);
    const todoList = getByTestId('todos-list');
    expect(todoList).toBeTruthy();
    expect(todoList.children.length).toBe(3);
  })

  test('should allow adding new todos', async () => {
    const { getByTestId, debug, getByLabelText, getByText, getAllByTestId } = render(<Todos />);

    await waitForDomChange();

    const todoInput = getByLabelText('Add todo');
    const todo = 'Learn React';
    fireEvent.change(todoInput, { target: { value: todo } });
    expect(todoInput.value).toBe(todo);

    fireEvent.submit(getByTestId('add-button'));
    // debug();
    expect(todoInput.value).toBe('');
    const todoList = getByTestId('todos-list');
    expect(todoList.children.length).toBe(4);
    expect(getByText(todo)).toBeTruthy();
    expect(getAllByTestId('todo')[0].innerHTML).toContain(todo);
  });
});

describe('Todos component - error test', () => {
  test('should display an error if request fails', async () => {
    const error = 'Async error';
    axios.get.mockRejectedValue(new Error(error));

    const { container, queryByTestId } = render(<Todos />);

    await waitForDomChange();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(container).toHaveTextContent(`Something went wrong! ${error}`);

    const todoList = document.querySelector('[data-testid="todos-list"]');
    expect(todoList).not.toBeInTheDocument();
  });
});