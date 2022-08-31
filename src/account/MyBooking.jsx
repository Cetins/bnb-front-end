import React from "react";

const MyBooking = ({ booking }) => {

    return (
        <div className="padding1 align-left card">
            <span className="icon-container">
                <span className="material-icons">calendar_month </span>
                <h4>  Date: {booking.date}</h4>
            </span>
            <p>Nights: {booking.nights}</p>
            <p>People: {booking.people}</p>
        </div>
    )
}

export default MyBooking;