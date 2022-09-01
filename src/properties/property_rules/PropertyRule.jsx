import React from "react";

const PropertyRule = ({ propertyRule }) => {
    return (
        <li className="custom-li">
            {propertyRule.isAllowed ? <p>{propertyRule.title} allowed</p> : <p>{propertyRule.title} not allowed</p>}
        </li>
    )
}

export default PropertyRule;