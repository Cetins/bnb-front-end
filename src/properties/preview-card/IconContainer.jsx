import React from "react";
import Rating from "./Rating";

const IconContainer = ({ property })=> {

    const title = `${ property.bedCount } bed ${ property.type } in ${ property.location }`;

    const rating = parseFloat(property.rating).toFixed(2);

    return (
        <div className="line-icon-right">
            <h4>{ title }</h4>
            {rating > 1 ?
            <Rating rating={ rating } /> : null}
        </div>
    );
}

export default IconContainer;