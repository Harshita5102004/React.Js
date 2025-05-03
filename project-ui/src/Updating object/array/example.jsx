// React state should always be immutable — changing the original object or array directly won't trigger a re-render.

import React, { useState } from 'react';

function UserInfo() {
  const [user, setUser] = useState({ name: 'Harshita', age: 21 });

  const changeName = () => {
    setUser({ ...user, name: 'Jiya ' }); // 🔁 Copy old values, then override
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

// export default UserInfo;





function TodoList() {
  const [todos, setTodos] = useState(['Learn React']);

  const addTodo = () => {
    setTodos([...todos, 'Practice useState']); // 🔁 Spread old items + new one
  };

  return (
    <div>
      <h3>My Todos</h3>
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}


export default TodoList;