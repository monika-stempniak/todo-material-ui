import axios from 'axios';
import { useEffect, useReducer } from 'react';
import * as ACTIONS from '../store/actions';
import { initialState, reducer } from '../store/reducer';

const useFetchedData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        dispatch({type: ACTIONS.SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({type: ACTIONS.FAILURE, error: error.message});
      })
  }, [])

  const { data, isLoading, error } = state;

  return [data, isLoading, error];
}

export default useFetchedData;