import React from 'react';
import axios from 'axios';
import { render, fireEvent } from '@testing-library/react';
import { waitForDomChange } from '@testing-library/dom';

import { Todos } from '.';

const todos = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }
];

jest.mock('axios');

describe('Todos component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({data: todos});
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
