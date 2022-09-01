import React from "react";

const Parking = ({ parking }) => {

    return (
        <li className="custom-li">
            {parking.isFree ? <p>Free {parking.title}</p> : <p>{parking.title}</p>}
        </li>
    )
}

export default Parking;