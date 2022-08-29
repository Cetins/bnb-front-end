import React from "react";

const PropertyRule = ({ propertyRule }) => {
    return (
        <div className="framed-component">
            <span>
                <p>{propertyRule.title}</p>
                {propertyRule.isAllowed ? <p>allowed</p> : <p>not allowed</p>}
            </span>
        </div>
    )
}

export default PropertyRule;