import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewService from "../services/ReviewService";

const UpdateReview = ({ loggedUser, setLoggedUser }) => {
    const {id} = useParams();
    const [review, setReview] = useState();
    const [text, setText] = useState();
    const [rating, setRating] = useState();

    useEffect(() => {
        ReviewService.findReview(id)
        .then(review => setReview(review));
    }, []);

    const handleTextChange = (e) => setText(e.target.value);
    const handleRatingChange = (e) => setRating(e.target.value);


    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            id: id,
            guestId: review.guest.id,
            propertyId: review.property.id,
            text: text,
            rating: parseFloat(rating)
        }
        ReviewService.updateReview(newReview);
        setReview("");
        setRating("");
        alert("Your review has successfully updated");
        window.location = "/account";
    }

    if(!review) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <form onSubmit={handleReviewSubmit}>
                <div>
                    <label>Edit your review: </label>
                    <textarea className="text-box" type="text" onChange={handleTextChange} defaultValue={review.text} />
                </div>
                <div>
                    <label>Edit your rating: </label>
                    <input type="number" onChange={handleRatingChange} defaultValue={review.rating} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default UpdateReview;