import React from "react";

const CheckInAfter = ({ time }) => {
    return ( 
        <div>
            <span className="icon-container">
                <span className="material-icons">schedule</span>
                <p>Check-in after { time }</p>
            </span>
        </div>
    )
}

export default CheckInAfter;