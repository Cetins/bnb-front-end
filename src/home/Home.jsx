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
        <div className="parent-container">
            <PropertyList properties={properties} />
        </div>
    )
}

export default Home;