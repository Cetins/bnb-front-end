import React from "react";
import AmenityCategory from "./AmenityCategory";

const AmenityList = ({ categories, amenities }) => {

    const itemList = categories.map(category => {
        return <AmenityCategory category={category} amenities={amenities} />
    })

    return (
        <div>
            <h3>Amenities</h3>
            <hr></hr>
            <ul className="cards">{ itemList }</ul>
        </div>
    )
}

export default AmenityList;