import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import PropertyService from "../services/PropertyService";
import Description from "./Description";

const Property = () => {

    const {id} = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        PropertyService.findProperty(id)
        .then(property => setProperty(property));
    });
    
    if(!property) {
        return <p>Loading...</p>
    }
    
    return  (
        <div className="container-grid">
            <span className="rating-span">
                <Rating property={property} />
                <h3> , { property.location }</h3>
            </span>
            <br/>

            <img className="cover-img" src={require('../static/images/' + property.coverImage + '.jpg')} />
            <br/>

            <div className="children-left-align">
                <h3>£ {property.rate} per night, {property.bedCount} bed, hosted by {property.host.firstName}</h3> 
                <br/>
                <Description text={property.description} />
            </div> 
        </div>
    )
}

export default Property;