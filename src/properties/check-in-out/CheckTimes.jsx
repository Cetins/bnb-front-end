import React from "react";
import CheckInAfter from "./CheckInAfter";
import CheckOutBefore from "./CheckOutBefore";

const CheckTimes = ({ property }) => {
    return (
        <div>
            <h3>Check in/out</h3>
            <hr></hr>
            <CheckInAfter time={property.checkInAfter} /><br/>
            <CheckOutBefore time={property.checkOutBefore} />
        </div>
    )
}

export default CheckTimes;