import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const PropertyPreview = ({ property }) => {

    const propertyHeading = `${property.bedCount} bed ${property.type} in ${property.location}`
    
    const url = "/property/" + property.id
    
    return  (
        <div className="container-children" >
            <img className="list-preview-img" src={require('../static/images/' + property.coverImage + '.jpg')} />
            <span className="rating-span">
                <h3>{property.location}</h3>
                <Rating property={property} />
            </span>
            <div className="children-left-align">
                <p>{propertyHeading}</p>
                <p>£ {property.rate * 3} for 3 nights</p>
            </div>
            <Link to={url} >more...</Link>
        </div>
    )

}

export default PropertyPreview;