import React, { useReducer } from 'react';

// Step 1: Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };

    case 'DECREMENT':
      return { count: state.count - 1 };

    case 'RESET':
      return { count: 0 };

    default:
      return state;
  }
};

// Step 2: Initial state
const initialState = { count: 0 };

// Step 3: Component
function CounterApp() {
    // in dispatch we did not change sate directly like setstate
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={styles.container}>
      <h2>Counter App (useReducer)</h2>
      <h1>{state.count}</h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </div>
  );
}

// Some simple styling
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px'
  }
};

export default CounterApp;
