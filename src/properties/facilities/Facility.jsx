import React from "react";

const Facility = ({ facility }) => {

    return (
        <div className="framed-component">
            <span className="icon-container">
                <span className="material-icons">{facility.iconUrl}</span>
                <h3>{ facility.title }</h3>
            </span>
        </div>
    )
}

export default Facility;