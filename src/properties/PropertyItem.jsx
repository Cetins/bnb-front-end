import React from "react";
import { SecondTitle } from "../home/Headers";

const PropertyItem = ({ property }) => {

    const propertyHeading = `${property.bedroomCount} bed ${property.type} in ${property.location}`

    return  (
        <React.Fragment>
            <SecondTitle title={propertyHeading} />
            <Text context={property.description} />
        </React.Fragment>
    )

}

export default PropertyItem;