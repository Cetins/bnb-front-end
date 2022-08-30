import React from "react";
import MyReview from "./MyReview";

const MyReviewList = ({ reviews }) => {

    const itemList = reviews.map((review) => <MyReview review={review} key={review.id}/>)

    return (
        <div className="centered">
            <h3>My Reviews</h3>
            <hr></hr>
            <ul className="cards">
                {itemList}
            </ul>
        </div>
    )
    
}

export default MyReviewList;