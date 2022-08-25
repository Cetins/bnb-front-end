import React, { useEffect, useState } from "react";
import LogComponent from "../login/LogComponent";
import Profile from "../login/Profile";
import PropertyService from "../services/PropertyService"
import PropertyList from "../properties/PropertyList";

const Home = () => {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        PropertyService.getProperties()
        .then(properties => setProperties(properties));
    });

    return (
        <>
            <LogComponent />
            <PropertyList properties={properties} />
        </>
    )
}

export default Home;