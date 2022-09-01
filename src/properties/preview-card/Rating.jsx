import React from "react";

const Rating = ({ rating }) => {

    return (
        <span className="icon-container">
            <span className="material-icons">star</span>
            <h4> {rating}</h4>
        </span>
    )

}

export default Rating;