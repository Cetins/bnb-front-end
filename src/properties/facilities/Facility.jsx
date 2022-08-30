import React from "react";

const Facility = ({ facility }) => {

    return (
        <div>
            <span className="icon-container">
                <span className="material-icons">{facility.iconUrl}</span>
                <p>{ facility.title }</p>
            </span>
        </div>
    )
}

export default Facility;