import React, { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'increment') {
    return state + 1;   
  }
  if (action.type === 'decrement') {
    return state - 1;    
  }
  return state;
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Add 1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Subtract 1</button>
    </>
  );
}

export default Counter;
