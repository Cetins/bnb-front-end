import React from "react";
import PropertyCard from "./preview-card/PropertyCard";

const PropertyList = ({ properties }) => {
    const itemList = properties.map((property, index) => {
        return <li key={index}><PropertyCard property={property}/></li>
    })

    return (
            <ul className="row-wrap cards" >
                { itemList }
            </ul>
    )
}

export default PropertyList;