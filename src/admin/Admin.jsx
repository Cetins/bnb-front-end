import React, { useEffect, useState } from "react";
import GuestService from "../services/GuestService"
import GuestList from "./GuestList";

const Admin = () => {
    const [guests, setGuests] = useState([]);
    

    useEffect(() => {
        GuestService.getGuests()
        .then(guests => setGuests(guests));
    });

    return (
        <div>
            <p>admin</p>
            {/* <img src={require("../images/spacejoy-YI2YkyaREHk-unsplash.jpg")} alt="propertyphoto" /> */}
            <GuestList guests={guests} />
        </div>
    )
}

export default Admin;