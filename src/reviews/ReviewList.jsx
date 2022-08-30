import React from "react";
import Review from "./Review";

const ReviewList = ({ reviews }) => {

    const itemList = reviews.map((review, index) => <Review review={review} key={review.id} />)

    return (
        <div className="centered">
            <h3>Reviews</h3>
            <hr></hr>
            <ul className="cards">
                {itemList}
            </ul>
        </div>
    )
}

export default ReviewList;