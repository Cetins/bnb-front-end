import React from "react";
import Rating from "../properties/preview-card/Rating";

const Review = ({ review }) => {

    return (
        <div className="card review-box">
            <span className="rating-span">
                <h3>{review.guest.firstName}</h3>
                <Rating rating={review.rating}/>
            </span>
            <p>{review.text}</p>
        </div>
    )
}

export default Review;