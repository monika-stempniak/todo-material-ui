import axios from 'axios';
import { useEffect, useReducer } from 'react';

const initialState = {
  isLoading: true,
  data: [],
  error: '',
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: `Something went wrong! ${action.error}`,
      }
    default:
      return state;
  }
}

const useFetchedData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        dispatch({type: 'FETCH_SUCCESS', payload: response.data});
      })
      .catch(error => {
        dispatch({type: 'FETCH_FAILURE', error: error.message});
      })
  }, [])

  const { data, isLoading, error } = state;

  return [data, isLoading, error];
}

export default useFetchedData;