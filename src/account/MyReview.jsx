import React from "react";
import Rating from "../properties/preview-card/Rating";
import { Link } from "react-router-dom";

const MyReview = ({ review }) => {

    const url = "/review/edit/" + review.id

    return (
        <div className="padding1 align-left card dashed">
            <Rating rating={review.rating} />
            <p>{review.property.type} in {review.property.location}</p>
            <p>{review.text}</p>
            <div className="align-center">
                <button className="button"><Link to={url} className="white-link">edit</Link></button>
            </div>
        </div>
    )
}

export default MyReview;