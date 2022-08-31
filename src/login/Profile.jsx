import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogComponent from "./LogComponent";
import LogoutButton from "./LogoutButton";
import MyReviewList from "../account/MyReviewList";
import MyBookingList from "../account/MyBookingList";

const Profile = ({ loggedUser }) => {
  const { user, isLoading, isAuthenticated } = useAuth0();

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
        {loggedUser ? <MyBookingList bookings={loggedUser.bookings} /> : null}
      </div>
    )
  }

  return (
    <LogComponent />
  );
};

export default Profile;