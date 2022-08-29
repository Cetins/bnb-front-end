import React from "react";
import AmenityCategory from "./AmenityCategory";

const AmenityList = ({ categories, amenities }) => {

    const itemList = categories.map(category => {
        return <AmenityCategory category={category} amenities={amenities} />
    })

    return (
        <ul>{ itemList }</ul>
    )
}

export default AmenityList;