import React from "react";

const Rating = ({ rating }) => {

    return (
        <span className="icon-container">
            <span className="material-icons">star</span>
            <h3> {rating}</h3>
        </span>
    )

}

export default Rating;