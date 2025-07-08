import React, { useState } from 'react';

function ProfileEditor() {
  const [profile, setProfile] = useState({
    name: 'Harshita Nagar',
    email: 'harshita@example.com',
    age: 19
  });

  function changename(event) {
    setProfile(p => ({ ...p, name: event.target.value }));
  }

  function changemail(event) {
    setProfile(p => ({ ...p, email: event.target.value }));
  }

  function changeage(event) {
    setProfile(p => ({ ...p, age: event.target.value }));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile Editor</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={profile.name} 
          onChange={changename}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label>
        <input type="email"  name="email"  value={profile.email}   onChange={changemail}  />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Age:</label>
        <input 
          type="number" 
          name="age" 
          value={profile.age} 
          onChange={changeage}
        />
      </div>

      <h3>Current Profile:</h3>
      <pre>{profile.name}</pre>
      <pre>{profile.email}</pre>
      <pre>{profile.age}</pre>
    </div>
  );
}

export default ProfileEditor;
