import React from "react";
import Rating from "../properties/preview-card/Rating";

const MyReview = ({ review }) => {

    return (
        <div className="padding1 align-left card">
            <Rating rating={review.rating} />
            <p>{review.property.type} in {review.property.location}</p>
            <p>{review.text}</p>
            <div className="align-center">
                <button className="button">edit</button>
            </div>
        </div>
    )
}

export default MyReview;