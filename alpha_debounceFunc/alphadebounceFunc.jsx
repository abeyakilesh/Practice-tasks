import React, { useReducer } from 'react';
const reducer = (state, action) => action.type === 'inc' ? {c: state.c + 1} : state;
export default function Counter() {
  const [state, dispatch] = reducer(reducer, {c: 0});
  return <div onClick={() => dispatch({type: 'inc'})}>{state.c}</div>;
}
