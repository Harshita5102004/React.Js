import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
};

function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function UserForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${state.name}\nEmail: ${state.email}`);
    dispatch({ type: 'RESET' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={state.name} onChange={handleChange} />
      <br />
      <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
