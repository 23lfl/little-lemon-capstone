import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

export const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }
    return state;
};

export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const submitForm = (formData) => {
        console.log("Reservation Data:", formData);
        alert("Reservation Successful!");
    };

    return (
        <main>
            <h1 style={{textAlign: "center"}}>Book a Table</h1>
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm={submitForm} 
            />
        </main>
    );
}

export default Main;
