import React, { useEffect, useState } from "react";
import LoginButton from "../login/LoginButton";
import LogoutButton from "../login/LogoutButton";
import Profile from "../login/Profile";

const Home = () => {

    return (
        <>
            <h1>Home</h1>
            <LoginButton />
            <LogoutButton />
            <Profile />
        </>
    )
}

export default Home;