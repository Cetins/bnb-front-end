import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const PropertyPreview = ({ property }) => {

    const propertyHeading = `${property.bedCount} bed ${property.type} in ${property.location}`
    
    const url = "/property/" + property.id
    
    return  (
        <div className="card" >
            <img src={require('../static/images/' + property.coverImage + '.jpg')} />
            <span className="rating-span">
                <h3>{property.location}</h3>
                <Rating rating={property.rating} />
            </span>
            <div>
                <p>{propertyHeading}</p>
                <p>£ {property.rate * 3} for 3 nights</p>
            </div>
            <Link to={url} >more...</Link>
        </div>
    )

}

export default PropertyPreview;