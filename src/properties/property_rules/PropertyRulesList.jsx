import React from "react";
import PropertyRule from "./PropertyRule";

const PropertyRulesList = ({ propertyRules }) => {
    const listItems = propertyRules.map(element => <PropertyRule key={element.id} propertyRule={element} />)

    return (
        <div className="card padding1">
            <h4 className="text-align-left">Rules</h4>
            <ul>{ listItems }</ul>
        </div>
    )
}

export default PropertyRulesList;