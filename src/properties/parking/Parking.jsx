import React from "react";

const Parking = ({ parking }) => {

    return (
        <div className="framed-component">
            <span>
                {parking.isFree ? <p>Free </p> : null}
                <p>{parking.title}</p>
            </span>
        </div>
    )
}

export default Parking;