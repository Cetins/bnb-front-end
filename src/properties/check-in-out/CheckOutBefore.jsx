import React from "react";

const CheckOutBefore = ({ time }) => {
    return (
        <div>
            <span className="icon-container">
                <span className="material-icons">schedule</span>
                <p>Check-out before { time }</p>
            </span>
        </div>
    )
}

export default CheckOutBefore;