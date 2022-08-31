import React from "react";
import PropertyRule from "./PropertyRule";

const PropertyRulesList = ({ propertyRules }) => {
    const listItems = propertyRules.map(element => <PropertyRule key={element.id} propertyRule={element} />)

    return (
        <div>
            <h4 className="text-align-center">Rules</h4>
            <ul>{ listItems }</ul>
        </div>
    )
}

export default PropertyRulesList;