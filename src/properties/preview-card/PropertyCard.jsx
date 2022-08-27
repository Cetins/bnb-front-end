import React from "react";
import PropertyImage from "./PropertyImage";
import IconContainer from "./IconContainer";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {

    const url = "/property/" + property.id

    return (
        <div className="card">
            <PropertyImage coverUrl={ property.coverImage } />
            <IconContainer property={property} />
            <p>£ {property.rate * 3} for 3 nights</p>
            <Link to={url} >more...</Link>
        </div>
    )
}

export default PropertyCard;