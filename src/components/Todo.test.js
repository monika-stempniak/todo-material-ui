import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Todo } from ".";

const todo = {
  userId: 1,
  id: 1,
  title: "Buy milk",
  completed: false
};

const props = {
  index: 1,
  todo
};

describe("Todo component", () => {
  let toggleTodo;
  let deleteTodo;
  beforeEach(() => {
    toggleTodo = jest.fn();
    deleteTodo = jest.fn();
  });

  test("should allow to complete todo", async () => {
    const { getByTestId } = render(
      <Todo {...props} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    );

    fireEvent.click(getByTestId("todo-buy-milk"));
    expect(toggleTodo).toHaveBeenCalledTimes(1);
    expect(deleteTodo).toHaveBeenCalledTimes(0);
  });

  test("should allow to delete todo", async () => {
    todo.completed = true;
    const { getByTestId } = render(
      <Todo {...props} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    );

    fireEvent.click(getByTestId("delete-buy-milk"));
    expect(deleteTodo).toHaveBeenCalledTimes(1);
    expect(toggleTodo).toHaveBeenCalledTimes(0);
  });
});
