import React from "react";

const MyReview = ({ review }) => {

    return (
        <div className="padding1 align-left">
            <p>Rating : {review.rating}</p>
            <p>{review.property.type} in {review.property.location}</p>
            <p>{review.text}</p>
        </div>
    )
}

export default MyReview;