import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogComponent from "./LogComponent";
import LogoutButton from "./LogoutButton";
import GuestService from "../services/GuestService";
import MyReviewList from "../account/MyReviewList";

const Profile = ({ loggedUser, setLoggedUser }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      GuestService.getGuestByEmail(user.email)
    .then(res => setLoggedUser(res))
    }
  }, [user])

  useEffect(() => {},[loggedUser]);

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
        {loggedUser ? <MyReviewList reviews={loggedUser.reviews} /> : null}
      </div>
    )
  }

  return (
    <LogComponent />
  );
};

export default Profile;