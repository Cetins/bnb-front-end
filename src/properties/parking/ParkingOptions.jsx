import React from "react";
import Parking from "./Parking";

const ParkingOptions = ({ parkingOptions }) => {
    const itemList = parkingOptions.map(option => <Parking key={option.id} parking={option} />)

    return (
        <div>
            <span className="icon-container">
                <span className="material-icons">local_parking</span>
                <h3>Parking</h3>
            </span>
            <hr></hr>
            <ul>{ itemList }</ul>
        </div>
    )
}

export default ParkingOptions;