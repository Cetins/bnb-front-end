import React from "react";

const PropertyRule = ({ propertyRule }) => {
    return (
        <span>
            <p>{propertyRule.title}</p>
            {propertyRule.isAllowed ? <p>allowed</p> : <p>not allowed</p>}
        </span>
    )
}

export default PropertyRule;