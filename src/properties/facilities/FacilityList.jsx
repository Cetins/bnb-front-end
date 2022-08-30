import React from "react";
import Facility from "./Facility";

const FacilityList = ({ facilities }) => {
    const itemList = facilities.map(facility => <Facility key={facility.id} facility={facility} />)

    return (
        <div>
            <h3>Facilities</h3>
            <ul>{ itemList }</ul>
        </div>
    )
}

export default FacilityList;