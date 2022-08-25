import React from "react";
import PropertyItem from "./PropertyItem";

const PropertyList = ({ properties }) => {
    const itemList = properties.map((property, index) => {
        return <li key={index}><PropertyItem property={property}/></li>
    })

    return (
        <ul className="test" >
            { itemList }
        </ul>
    )
}

export default PropertyList;