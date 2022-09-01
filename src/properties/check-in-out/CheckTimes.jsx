import React from "react";

const CheckTimes = ({ property }) => {
    return (
        <div className="card padding1">
            <h4 className="text-align-left">Check in/out</h4>
            <ul>
                <li className="custom-li">
                    <p>Check-in after { property.checkInAfter }</p>
                </li>
                <li className="custom-li">
                    <p>Check-out before { property.checkOutBefore }</p>
                </li>
            </ul>
        </div>
    )
}

export default CheckTimes;