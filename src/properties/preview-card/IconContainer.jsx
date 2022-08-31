import React from "react";
import Rating from "./Rating";

const IconContainer = ({ property })=> {

    const title = `${ property.bedCount } bed ${ property.type } in ${ property.location }`;

    return (
        <div className="line-icon-right">
            <h4>{ title }</h4>
            <Rating rating={ property.rating } />
        </div>
    );
}

export default IconContainer;