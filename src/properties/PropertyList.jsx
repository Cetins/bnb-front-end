import React from "react";
import PropertyPreview from "./PropertyPreview";

const PropertyList = ({ properties }) => {
    const itemList = properties.map((property, index) => {
        return <li className="container-children" key={index}><PropertyPreview property={property}/></li>
    })

    return (
        <div className="container-flex">
            <ul className="container-parent" >
                { itemList }
            </ul>
        </div>
    )
}

export default PropertyList;