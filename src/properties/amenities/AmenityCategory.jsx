import React from "react";
import Amenity from "./Amenity";

const AmenityCategory = ({ category, amenities }) => {

    const itemList = amenities.filter(amenity => amenity.category == category).map(amenity => {
        return <Amenity key={amenity.id} amenity={amenity} />
    })


    return (
        <div className="framed-component">
            <h3>{ category }</h3>
            <ul>{ itemList }</ul>
        </div>
    )
}

export default AmenityCategory;