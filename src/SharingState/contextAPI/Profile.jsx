import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { theme } = useContext(UserContext);

  return <p>Your selected theme is: {theme}</p>;
}

export default Profile;
