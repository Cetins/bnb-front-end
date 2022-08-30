import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogComponent from "./LogComponent";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <img className="profile-img" src={user.picture} alt={user.name} />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <LogoutButton />
      </div>
    )
  }

  return (
    <LogComponent />
  );
};

export default Profile;