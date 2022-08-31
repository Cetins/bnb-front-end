import React from "react";
import MyBooking from "./MyBooking";

const MyBookingList = ({ bookings }) => {
    const listItems = bookings.map(booking => <MyBooking key={booking.id} booking={booking} />)

    return (
        <div>
            <h3>My Bookings</h3>
            <hr></hr>
            <ul className="row-wrap">
                {listItems}
            </ul>
        </div>
    )
}

export default MyBookingList;