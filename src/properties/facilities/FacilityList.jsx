import React from "react";
import Facility from "./Facility";

const FacilityList = ({ facilities }) => {
    const itemList = facilities.map(facility => <Facility key={facility.id} facility={facility} />)

    return (
        <div className="card padding1">
            <h4 className="text-align-left">Facilities</h4>
            <ul>{ itemList }</ul>
        </div>
    )
}

export default FacilityList;