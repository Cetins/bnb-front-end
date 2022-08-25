import React from "react";


const PropertyItem = ({ property }) => {

    const propertyHeading = `${property.bedCount} bed ${property.type} in ${property.location}`

    return  (
        <React.Fragment>
            <h2>{propertyHeading}</h2>
            <p>{property.description}</p>
        </React.Fragment>
    )

}

export default PropertyItem;