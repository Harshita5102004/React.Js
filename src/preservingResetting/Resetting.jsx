import { useState } from 'react';


//In React, resetting state means setting a state variable back to its initial or default value. 
// This is useful when you want to clear out values or revert to the starting point, like clearing a form or resetting a counter.

function Reserving() {
  const [name, setName] = useState('');

  const resetForm = () => {
    setName('');  // Resetting state to initial value
  };

  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name"
      />
      <p>Hello, {name}</p>
      <button onClick={resetForm}>Reset</button>
    </div>
  );
}

export default Reserving;