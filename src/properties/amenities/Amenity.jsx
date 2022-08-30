import React from "react";

const Amenity = ({ amenity }) => {
    return (
        <li className="custom-li">
            <p>{amenity.title}</p>
        </li>
    )
}

export default Amenity;