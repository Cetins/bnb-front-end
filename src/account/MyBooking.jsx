import React from "react";

const MyBooking = ({ booking }) => {

    return (
        <div>
            <p>Date: {booking.date}</p>
            <p>Nights: {booking.nights}</p>
            <p>People: {booking.people}</p>
        </div>
    )
}

export default MyBooking;