import React from "react";

const Parking = ({ parking }) => {

    return (
        <div>
            <span className="row-wrap margin5">
                <span className="material-icons">local_parking</span>
                {parking.isFree ? <p>Free {parking.title}</p> : <p>{parking.title}</p>}
            </span>
        </div>
    )
}

export default Parking;