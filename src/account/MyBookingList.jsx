import React from "react";
import MyBooking from "./MyBooking";

const MyBookingList = ({ bookings }) => {
    const listItems = bookings.map(booking => <MyBooking key={booking.id} booking={booking} />)

    return <ul>{listItems}</ul>
}

export default MyBookingList;