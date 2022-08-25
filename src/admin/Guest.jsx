import React from "react";

const Guest = ({ guest }) => {

    return (
        <div>
            <h1>{ guest.firstName } { guest.lastName }</h1>
            <p>{ guest.email }</p>
        </div>
    )

}

export default Guest;