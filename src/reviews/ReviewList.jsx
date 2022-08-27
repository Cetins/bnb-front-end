import React from "react";
import Review from "./Review";

const ReviewList = ({ reviews }) => {

    const itemList = reviews.map((review, index) => <Review review={review} />)

    return (
        <div className="centered">
            <ul className="cards">
                {itemList}
            </ul>
        </div>
    )
}

export default ReviewList;