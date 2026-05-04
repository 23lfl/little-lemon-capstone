import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', date: new Date(e.target.value) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({ date, time, guests, occasion });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '400px', margin: 'auto', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} required aria-label="Select date" />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required aria-label="Select time">
                <option value="">Select a time</option>
                {availableTimes.map(t => <option key={t}>{t}</option>)}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} required aria-label="Number of guests" />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} aria-label="Select occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button type="submit" aria-label="Submit reservation" disabled={!date || !time}>
                Make Your Reservation
            </button>
        </form>
    );
};

export default BookingForm;
