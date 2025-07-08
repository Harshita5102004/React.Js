import React, { useState } from 'react';

// Child component 1
function NameInput({ value, onChange }) {
  return (
    <div>
      <label>Name: </label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

// Child component 2
function NicknameInput({ value, onChange }) {
  return (
    <div>
      <label>Nickname: </label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

// Parent component
function Lifting() {
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h2>🧠 Lifting State Example</h2>
      <NameInput value={name} onChange={setName} />
      <NicknameInput value={name} onChange={setName} />
      <p>Hello, <strong>{name || '...'}</strong>!</p>
    </div>
  );
}

export default Lifting;
