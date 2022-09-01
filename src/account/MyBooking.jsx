import React from "react";

const MyBooking = ({ booking }) => {

    return (
        <div className="padding1 align-left card dashed">
            <span className="icon-container">
                <span className="material-icons">calendar_month </span>
                <h4>  Date: {booking.date}</h4>
            </span>
            <p>Nights: {booking.nights}</p>
            <p>People: {booking.people}</p>
            <div className="align-center">
                <button className="button">Rate</button>
            </div>
        </div>
    )
}

export default MyBooking;