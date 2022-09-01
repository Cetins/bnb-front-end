import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropertyService from "../services/PropertyService";
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
        <div className="column-wrap center">
            <div>
                <IconContainer property={property} />
            </div>
            <br/>
        
            <div>
                <Gallery property={property} imageUrls={property.imageUrls} />
            </div>

            <div className="grid2rows">
                <div className="padding1">
                    <h2 className="text-align-left">{property.type} in {property.location}, hosted by {property.host.firstName}</h2>
                    <br></br>
                    <Description text={property.description} />
                </div>
                <div>
                    <NewBookingForm property={property} addBooking={addBooking} loggedUser={loggedUser} />
                </div>
            </div>

            <div className="row-wrap margin-left-3">
                <AmenityList categories={amenityCategories} amenities={property.amenities} />
            </div>

            <div>
                <h3>This property also offers</h3>
                <hr></hr>
                <div className="row-wrap">
                    <div className="card">
                        <FacilityList facilities={property.facilities} />
                    </div>

                    <div className="card">
                        <CheckTimes property={property} />
                    </div>

                    {property.propertyRules.length != 0 ? 
                    <div className="card">
                        <PropertyRulesList propertyRules={property.propertyRules}/>
                    </div> : null}

                    {property.parkingOptions.length != 0 ? 
                    <div className="card">
                        <ParkingOptions parkingOptions={property.parkingOptions}/>
                    </div> : null}
                </div>
            </div>

            <div className="row-wrap align-left">
                <div>
                    {property.reviews.length != 0 ?
                    <ReviewList  reviews={property.reviews}/> :
                    <p>This property doesn't have any reviews yet.</p>}
                </div>
            </div>


            
        </div>
    )
}

export default Property;