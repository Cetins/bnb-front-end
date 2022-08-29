import React from "react";

const CheckOutBefore = ({ time }) => {
    return (
        <div className="framed-component">
            <span className="icon-container">
                <span className="material-icons">schedule</span>
                <h3>Check-out before { time }</h3>
            </span>
        </div>
    )
}

export default CheckOutBefore;