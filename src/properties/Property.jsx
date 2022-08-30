import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropertyService from "../services/PropertyService";
import AmenityService from "../services/AmenityService";
import Description from "./Description";
import CheckTimes from "./check-in-out/CheckTimes";
import ReviewList from "../reviews/ReviewList";
import IconContainer from "../properties/preview-card/IconContainer";
import AmenityList from "./amenities/AmenityList";
import FacilityList from "./facilities/FacilityList";
import ParkingOptions from "./parking/ParkingOptions";
import PropertyRulesList from "./property_rules/PropertyRulesList";

const Property = () => {

    const {id} = useParams();
    const [property, setProperty] = useState(null);
    const [amenities, setAmenities] = useState([]);
    const [amenityCategories, setAmenityCategories] = useState([]);

    useEffect(() => {
        PropertyService.findProperty(id)
        .then(property => setProperty(property));
    }, []);

    useEffect(() => {
        AmenityService.getAmenities()
        .then(amenities => setAmenities(amenities));
    }, []);

    useEffect(() => {
        const categories = amenities.map(amenity => amenity.category)

        const uniqueCategories = [...new Set(categories)];
        setAmenityCategories(uniqueCategories);
    }, [amenities]);
    
    if(!property) {
        return <p>Loading...</p>
    }
    
    return  (
        <div className="property-listing">
            <div>
                <IconContainer property={property} />
            </div>
            <br/>

            <div>
                <img className="cover-img" src={require('../static/images/property/' + property.coverImage + '.jpg')} />
                <br/>
            </div>

            <div>
                <h2>{property.type} in {property.location}, hosted by {property.host.firstName}</h2>
            </div>

            <div>
                <Description text={property.description} />
            </div>
            <div>
                <AmenityList categories={amenityCategories} amenities={property.amenities} />
            </div>
            <div className="cards">
                <div className="card">
                    <FacilityList facilities={property.facilities} />
                </div>
                <div className="card">
                    <CheckTimes property={property} />
                </div>
                {property.parkingOptions.length != 0 ? 
                <div className="card">
                    <ParkingOptions parkingOptions={property.parkingOptions}/>
                </div> : null}
                <div className="card">
                    <PropertyRulesList propertyRules={property.propertyRules} />
                </div>
            </div>
            <div>
                <ReviewList  reviews={property.reviews}/>
            </div>
        </div>
    )
}

export default Property;