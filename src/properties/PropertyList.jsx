import React from "react";
import PropertyPreview from "./PropertyPreview";

const PropertyList = ({ properties }) => {
    const itemList = properties.map((property, index) => {
        return <li key={index}><PropertyPreview property={property}/></li>
    })

    return (
            <ul className="cards" >
                { itemList }
            </ul>
    )
}

export default PropertyList;