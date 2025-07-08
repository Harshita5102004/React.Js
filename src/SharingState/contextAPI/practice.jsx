// The Context API is a way to share state (or any data) between components without having to pass props manually at every level — also known as "prop drilling".
// Contextapi.js
import React from "react";
import { UserContext } from "./UserContext";
import Header from "./Header";
import Profile from "./Profile";

function Contextapi() {
  const userData = {
    username: "Harshita",
    theme: "light",
  };

  return (
    // 2. Provide the context to your components
    <UserContext.Provider value={userData}>
      <div>
        <Header />
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default Contextapi;
