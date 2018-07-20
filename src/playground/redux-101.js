import { createStore } from 'redux';

const store = createStore ((state = { count: 0 }) => {
  console.lot('running')
  return state
});

console.lot(store.getState());

// Action - than an object that gets sent to the store
// increment, decrement, count

// increment the count
store.dispatch({
  type: 'INCREMENT'
});

console.log(store.getState());