import React from "react";

const Parking = ({ parking }) => {

    return (
        <span>
            {parking.isFree ? <p>Free </p> : null}
            <p>{parking.title}</p>
        </span>
    )
}

export default Parking;