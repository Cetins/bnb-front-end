import React from "react";

const CheckTimes = ({ property }) => {
    return (
        <div className="column-wrap align-left">
            <h4 className="text-align-center">Check in/out</h4>
            <ul>
                <li className="no-style">
                    <span className="row-wrap margin5">
                        <span className="material-icons">schedule</span>
                        <p>Check-in after { property.checkInAfter }</p>
                    </span>
                </li>
                <li className="no-style">
                    <span className="row-wrap margin5">
                        <span className="material-icons">schedule</span>
                        <p>Check-out before { property.checkOutBefore }</p>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default CheckTimes;