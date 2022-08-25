import React from "react";

const PropertyItem = ({ property }) => {

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

export default PropertyItem;