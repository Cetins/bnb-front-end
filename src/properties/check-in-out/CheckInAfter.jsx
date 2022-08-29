import React from "react";

const CheckInAfter = ({ time }) => {
    return ( 
        <div className="framed-component">
            <span className="icon-container">
                <span className="material-icons">schedule</span>
                <h3>Check-in after { time }</h3>
            </span>
        </div>
    )
}

export default CheckInAfter;