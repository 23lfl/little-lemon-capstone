import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes } from './Main';

test('Renders the BookingForm labels', () => {
    render(<BookingForm availableTimes={[]} />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns non-empty array', () => {
    const times = initializeTimes();
    expect(times.length).toBeGreaterThan(0);
});
