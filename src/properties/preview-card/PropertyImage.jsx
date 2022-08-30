import React from "react";

const PropertyImage = ({ coverUrl }) => {
    return (
        <img className="review-img" src={require('../../static/images/property/' + coverUrl + '.jpg')} />
    )
}

export default PropertyImage;