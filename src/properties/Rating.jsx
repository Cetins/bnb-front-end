import React from "react";

const Rating = ({ property }) => {

    return (
        <span className="icon-container">
            <span className="material-icons">star</span>
            <h3> {property.rating}</h3>
        </span>
    )

}

export default Rating;