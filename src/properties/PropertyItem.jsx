import React from "react";
import { Link } from "react-router-dom";

const PropertyItem = ({ property }) => {

    const propertyHeading = `${property.bedCount} bed ${property.type} in ${property.location}`
    
    const url = "/property/" + property.id
    
    return  (
        <div className="test" >
            <h2>{propertyHeading}</h2>
            <h3>£ {property.rate} per night</h3> 
            <img className="list-cover-img" src={require('../static/images/' + property.coverImage + '.jpg')} />
            <p>{property.description}</p>
            <Link to={url} >more...</Link>
            {/* <button className="button" >more...</button> */}
        </div>
    )

}

export default PropertyItem;