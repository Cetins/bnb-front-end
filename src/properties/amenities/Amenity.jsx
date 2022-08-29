import React from "react";

const Amenity = ({ amenity }) => {
    return (
        <div className="framed-component">
            <p>{amenity.title}</p>
        </div>
    )
}

export default Amenity;