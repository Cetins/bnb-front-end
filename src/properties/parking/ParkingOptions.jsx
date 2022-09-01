import React from "react";
import Parking from "./Parking";

const ParkingOptions = ({ parkingOptions }) => {
    const itemList = parkingOptions.map(option => <Parking key={option.id} parking={option} />)

    return (
        <div className="card padding1">
            <h4 className="text-align-left">Parking</h4>
            <ul>{ itemList }</ul>
        </div>
    )
}

export default ParkingOptions;