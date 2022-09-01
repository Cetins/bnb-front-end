import React from "react";

const Facility = ({ facility }) => {

    return <li className="custom-li">{facility.isShared ? <p>Shared {facility.title}</p> : <p>Private {facility.title}</p>}</li>
        
            // <span className="row-wrap margin5">
            //     <span className="material-icons">{facility.iconUrl}</span>
            //     {facility.isShared ? <p>Shared {facility.title}</p> : <p>Private {facility.title}</p>}
            // </span>
}

export default Facility;