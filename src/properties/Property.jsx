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
import NewBookingForm from "../booking/NewBookingForm";
import BookingService from "../services/BookingService";
import Gallery from "../gallery/Gallery";

const Property = ({ loggedUser }) => {

    const {id} = useParams();
    const [property, setProperty] = useState(null);
    const [amenities, setAmenities] = useState([]);
    const [amenityCategories, setAmenityCategories] = useState([]);

    useEffect(() => {
        PropertyService.findProperty(id)
        .then(property => setProperty(property));
    }, []);

    useEffect(() => {
        PropertyService.findProperty(id)
        .then(property => setAmenities(property.amenities));
    }, []);

    useEffect(() => {
        const categories = amenities.map(amenity => amenity.category)

        const uniqueCategories = [...new Set(categories)];
        setAmenityCategories(uniqueCategories);
    }, [amenities]);

    const addBooking = (booking) => {
        console.log(booking);
        BookingService.addBooking(booking);
    }
    
    if(!property) {
        return <p>Loading...</p>
    }
    
    return  (
        <div className="property-listing">
            <div>
                <IconContainer property={property} />
            </div>
            <br/>
            <div className="align-center">
                <NewBookingForm property={property} addBooking={addBooking} loggedUser={loggedUser} />
            </div>

            <div>
                <Gallery property={property} imageUrls={property.imageUrls} />
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

            <div className="row-wrap">
                <div className="padding1">
                    <FacilityList facilities={property.facilities} />
                </div>

                <div className="padding1">
                    <CheckTimes property={property} />
                </div>

                <div className="padding1">
                    <PropertyRulesList propertyRules={property.propertyRules} />
                </div>

                {property.parkingOptions.length != 0 ? 
                <div className="padding1">
                    <ParkingOptions parkingOptions={property.parkingOptions}/>
                </div> : null}
            </div>
            
            <div>
                <ReviewList  reviews={property.reviews}/>
            </div>
        </div>
    )
}

export default Property;