import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "./preview-card/Rating";
import PropertyService from "../services/PropertyService";
import Description from "./Description";
import CheckInAfter from "./CheckInAfter";
import CheckOutBefore from "./CheckOutBefore";
import ReviewList from "../reviews/ReviewList";

const Property = () => {

    const {id} = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        PropertyService.findProperty(id)
        .then(property => setProperty(property));
    });
    
    if(!property) {
        return <p>Loading...</p>
    }
    
    return  (
        <div>
            <span className="rating-span">
                <Rating rating={property.rating} />
                <h3> , { property.location }</h3>
            </span>
            <br/>

            <img className="cover-img" src={require('../static/images/property/' + property.coverImage + '.jpg')} />
            <br/>

            <div className="card">
                <div>
                    <h2>{property.type} in {property.location}, hosted by {property.host.firstName}</h2>
                </div>

                <div>
                    <Description text={property.description} />
                </div>
                    
                <div>
                    <CheckInAfter time={property.checkInAfter} />
                    <CheckOutBefore time={property.checkOutBefore} />
                </div>

                <div>
                    <ReviewList  reviews={property.reviews}/>
                </div>
            </div> 
        </div>
    )
}

export default Property;