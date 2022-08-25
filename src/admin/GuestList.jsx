import React from "react";
import Guest from "./Guest";

const GuestList = ({ guests }) => {
    const itemList = guests.map((guest, index) => {
        return <li key={index}>
            <Guest guest={guest}/>
        </li>
    })

    return (
        <ul>
            { itemList }
        </ul>
    )
}

export default GuestList;

