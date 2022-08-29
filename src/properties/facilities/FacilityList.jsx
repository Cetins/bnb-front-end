import React from "react";
import Facility from "./Facility";

const FacilityList = ({ facilities }) => {
    const itemList = facilities.map(facility => <Facility key={facility.id} facility={facility} />)

    return <li>{ itemList }</li>
}

export default FacilityList;