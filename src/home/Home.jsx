import React, { useEffect, useState } from "react";
import LoginButton from "../login/LoginButton";
import LogoutButton from "../login/LogoutButton";
import Profile from "../login/Profile";
import PropertyService from "../services/PropertyService"
import PropertyItem from "../properties/PropertyItem";

const Home = () => {
    const [properties, setProperties] = useState([])

    const property = properties[0];


    useEffect(() => {
        PropertyService.getProperties()
        .then(properties => setProperties(properties));
    });

    return (
        <>
            <h1>Home</h1>
            <LoginButton />
            <LogoutButton />
            <Profile />
            <PropertyItem property={property} />
        </>
    )
}

export default Home;