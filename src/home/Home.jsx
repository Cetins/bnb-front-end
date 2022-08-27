import React, { useEffect, useState } from "react";
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
            <PropertyList properties={properties} />
        </>
    )
}

export default Home;