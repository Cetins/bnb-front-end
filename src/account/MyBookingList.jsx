import React from "react";
import MyBooking from "./MyBooking";

const MyBookingList = ({ bookings }) => {
    const listItems = bookings.map(booking => <MyBooking key={booking.id} booking={booking} />)

    return (
        <div className="dashed">
            <h3>  My Bookings</h3>
            <br></br>
            <ul className="row-wrap">
                {listItems}
            </ul>
            <br></br>
        </div>
    )
}

export default MyBookingList;