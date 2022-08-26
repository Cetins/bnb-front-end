import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropertyService from "../services/PropertyService";

const Property = ({  }) => {

    const {id} = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        PropertyService.findProperty(id)
        .then(property => setProperty(property));
    });
    
    if(!property) {
        return <p>Loading...</p>
    }

    const propertyHeading = `${property.bedCount} bed ${property.type} in ${property.location}`
    
    
    return  (
        <div className="test" >
            <h2>{propertyHeading}</h2>
            <h3>£ {property.rate} per night</h3> 
            <img className="list-cover-img" src={require('../images/' + property.coverImage + '.jpg')} />
            <p>{property.description}</p>
        </div>
    )
}

export default Property;