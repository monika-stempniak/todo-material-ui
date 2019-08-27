import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import { Todo } from '.';

const todo = {
  userId: 1,
  id: 1,
  title: "Learn Gatsby",
  completed: false
}

const props = {
  index: 1,
  todo,
}

describe('Todo component', () => {
  let completeTodo;
  let deleteTodo;
  beforeEach(() => {
    completeTodo = jest.fn();
    deleteTodo = jest.fn();
  });

  test('should allow to complete todo', async () => {
    const { getByTestId } = render(
      <Todo
        {...props}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    );

    fireEvent.click(getByTestId('complete'));
    expect(completeTodo).toHaveBeenCalledTimes(1);
    expect(deleteTodo).toHaveBeenCalledTimes(0);
  });

  test('should allow to delete todo', async () => {
    todo.completed = true;
    const { getByTestId } = render(
      <Todo
        {...props}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    );

    fireEvent.click(getByTestId('delete'));
    expect(deleteTodo).toHaveBeenCalledTimes(1);
    expect(completeTodo).toHaveBeenCalledTimes(0);
  });
});
