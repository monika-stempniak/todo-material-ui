import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { waitForDomChange } from '@testing-library/dom';

import { Todos } from '.';

describe('Todos component', () => {

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
    expect(todoList.children.length).toBe(200);
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
    expect(todoList.children.length).toBe(201);
    expect(getByText(todo)).toBeTruthy();
    expect(getAllByTestId('todo')[0].innerHTML).toContain(todo);
  });
});
