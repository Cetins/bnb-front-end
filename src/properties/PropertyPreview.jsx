import React from "react";
import { Link } from "react-router-dom";

const PropertyPreview = ({ property }) => {

    const propertyHeading = `${property.bedCount} bed ${property.type} in ${property.location}`
    
    const url = "/property/" + property.id
    
    return  (
        <div className="test" >
            <img className="list-cover-img" src={require('../static/images/' + property.coverImage + '.jpg')} />
            <h3>{property.location}</h3>
            <div className="icon-container">
                <span class="material-icons">star</span>
                <span> {property.rating}</span>
            </div>
            <p>{propertyHeading}</p>
            <p>£ {property.rate} per night</p>
            <Link to={url} >more...</Link>
        </div>
    )

}

export default PropertyPreview;