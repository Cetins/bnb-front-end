import React, { useState } from "react";

const NewBookingForm = ({ property, addBooking, loggedUser }) => {

    const [date, setDate] = useState();
    const [nights, setNights] = useState();
    const [people, setPeople] = useState();

    const handleDateChange = (e) => setDate(e.target.value);
    const handleNightsChange = (e) => setNights(e.target.value);
    const handlePeopleChange = (e) => setPeople(e.target.value);

    const handleBookingSubmit = (e) => {
        addBooking({loggedUser, property, date, nights, people});
    }

    return (
        <div>
            <form>
                <div>
                    <label>Check-in date: </label>
                    <input type="date" onChange={handleDateChange}/>
                </div>
                <div>
                    <label>Nights: </label>
                    <input type="number" onChange={handleNightsChange} />
                </div>
                <div>
                    <label>People: </label>
                    <input type="number" onChange={handlePeopleChange} />
                </div>
                <input type="submit" onSubmit={handleBookingSubmit} value="Book now" />
            </form>
        </div>
    )
}

export default NewBookingForm;