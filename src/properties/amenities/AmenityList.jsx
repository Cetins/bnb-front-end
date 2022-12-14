import React from "react";
import AmenityCategory from "./AmenityCategory";

const AmenityList = ({ categories, amenities }) => {

    const itemList = categories.map((category, index) => {
        return <AmenityCategory key={index} category={category} amenities={amenities} />
    })

    return (
        <div>
            <h3>Amenities</h3>
            <hr></hr>
            <div className="row-wrap">
                { itemList }
            </div>
        </div>
    )
}

export default AmenityList;