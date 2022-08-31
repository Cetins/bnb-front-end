import React, { useState } from "react";

const NewBookingForm = ({ property, addBooking, loggedUser }) => {

    const [date, setDate] = useState();
    const [nights, setNights] = useState();
    const [people, setPeople] = useState();

    const handleDateChange = (e) => setDate(e.target.value);
    const handleNightsChange = (e) => setNights(e.target.value);
    const handlePeopleChange = (e) => setPeople(e.target.value);

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        addBooking({
            guestId: loggedUser.id, 
            propertyId: property.id, 
            date: date, 
            nights: parseInt(nights), 
            people: parseInt(people)});
    }

    return (
        <div>
            <form className="row-wrap form" onSubmit={handleBookingSubmit}>
                <div className="form-items">
                    <label className="label">Check-in: </label>
                    <input className="calendar input" type="date" onChange={handleDateChange}/>
                </div>
                <div className="form-items">
                    <label className="label">Nights: </label>
                    <input className="input" type="number" onChange={handleNightsChange} />
                </div>
                <div className="form-items">
                    <label className="label">People: </label>
                    <input className="input" type="number" onChange={handlePeopleChange} />
                </div>
                <input className="button" type="submit"  value="Book now" />
            </form>
        </div>
    )
}

export default NewBookingForm;