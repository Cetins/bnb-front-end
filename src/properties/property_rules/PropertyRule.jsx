import React from "react";

const PropertyRule = ({ propertyRule }) => {
    return (

        <div>
            <span className="row-wrap margin5">
                <span className="material-icons">block</span>
                {propertyRule.isAllowed ? <p>{propertyRule.title} allowed</p> : <p>{propertyRule.title} not allowed</p>}
            </span>
        </div>
    )
}

export default PropertyRule;