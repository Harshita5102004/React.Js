import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Header() {
  const { username } = useContext(UserContext);

  return <h2>Welcome, {username}!</h2>;
}

export default Header;
