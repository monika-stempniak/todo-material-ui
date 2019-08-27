import React from 'react';
import axios from 'axios';
import { render, fireEvent } from '@testing-library/react';

import * as Reducer from './reducer';
import * as ACTIONS from './actions';
import { todos } from '../lib/todos-mock';

jest.mock('axios');

describe('test the reducer and actions', () => {
  it('should return the initial state', () => {
    expect(Reducer.initialState).toEqual({
      isLoading: true,
      data: [],
      error: '',
    });
  });

  it('should return todos when success', async () => {
    const actionsSuccess = {
      type: ACTIONS.SUCCESS,
      payload: todos,
    }

    await axios.get.mockResolvedValueOnce({data: todos});

    expect(Reducer.reducer(Reducer.initialState, actionsSuccess))
      .toEqual({
        isLoading: false,
        data: todos,
        error: '',
      })
  })

  it('should return error when failure', async () => {
    const error = 'Async error';
    const actionsFailure = {
      type: ACTIONS.FAILURE,
      error,
    }

    await axios.get.mockRejectedValue(new Error(error));

    expect(Reducer.reducer(Reducer.initialState, actionsFailure))
      .toEqual({
        isLoading: false,
        data: [],
        error: `Something went wrong! ${error}`,
      });
  });
});