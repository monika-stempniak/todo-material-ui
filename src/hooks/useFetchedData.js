import axios from 'axios';
import { useEffect, useReducer } from 'react';
import * as ACTIONS from '../store/actions';
import { initialState, reducer } from '../store/reducer';

const useFetchedData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let isSubscribed = true;
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        const res = isSubscribed ? dispatch({type: ACTIONS.SUCCESS, payload: response.data}) : null;
        return res;
      })
      .catch(error => {
        const err = isSubscribed ? dispatch({type: ACTIONS.FAILURE, error: error.message}) : null;
        return err;
      })

      return () => (isSubscribed = false);
  }, [])

  const { data, isLoading, error } = state;

  return [data, isLoading, error];
}

export default useFetchedData;