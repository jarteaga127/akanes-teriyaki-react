import { useState } from "react";
import type { BookingDetails, SeatType, TimeSlot } from "../types";
import "../styles/booking-form.css"

const BookingForm = () => {
const [step, setStep] = useState(1);
const [formData, setFormData] = useState<Partial<BookingDetails>>({
    guests: 0,
    date: '',
    time: '',
    seat: '',
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
};

const handleSubmit = (e: React.SubmitEvent) => {
e.preventDefault();
console.log("Thank you. Your table has been set.", formData);
setStep(3);
}

const timeSlots: TimeSlot[] = [
    {time: '18:00', label: '18:00', isAvailable: true},
    {time: '19:00', label: '19:00', isAvailable: true},
    {time: '20:00', label: '20:00', isAvailable: true},
    {time: '21:00', label: '21:00', isAvailable: true},
    {time: '22:00', label: '22:00', isAvailable: false}  
];

const seatTypes: SeatType[] = [
    {seat: 'table', label: 'table', isAvailable: true},
    {seat: 'counter', label: 'counter', isAvailable: true},
    {seat: 'group table', label: 'group table', isAvailable: false},
    {seat: 'window seat', label: 'window seat', isAvailable: false}
]

    return ( 
        <form onSubmit={handleSubmit}>
            {step === 1 && (
                <div className="form-control">
                    <label htmlFor="date">What day will you be coming?</label>
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} />
                    <label htmlFor="time">What time will you be coming?</label>
                    <select name="time" id="time" value={formData.time} onChange={handleInputChange} required disabled={!formData.date}>
                        <option>{formData.date ? "Select a time" : "Please tell us what day you are coming first, please."}</option>
                        {timeSlots.map((slot) => (
                            <option key={slot.time} value={slot.time} disabled={!slot.isAvailable}>
                                {slot.label}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="guests">How many guests are you bringing?</label>
                    <input type="number" name="guests" value={formData.guests} onChange={handleInputChange} min={0} max={10} />
                    <label htmlFor="seatType">What kind of seat do you want?</label>
                    <select name="seatType" id="seatType" value={formData.seat} onChange={handleInputChange} required disabled={!formData.guests} >
                        <option>{formData.guests ? "Pick a seat" : "Please tell us how many people you are bringing first."} </option>
                        {seatTypes.map((type) => (
                            <option key={type.seat} value={type.seat} disabled={!type.isAvailable}>{type.label}</option>
                        ))}
                    </select>
                    <button type="button" onClick={() => setStep(2)}>Next</button>
                </div>
            )}
            {step === 2 && (
                <div className="form-control">
                    <label htmlFor="name">Write your name here:</label>
                    <input type="text" name="name" required onChange={handleInputChange} />
                    <label htmlFor="phone-number">Phone Number:</label>
                    <input type="text" name="phone-number" onChange={handleInputChange}/>
                    <label htmlFor="email">Your email:</label>
                    <input type="text" name="email" onChange={handleInputChange} />
                    <button type="button" onClick={() => setStep(1)}>Go back</button>
                    <button type="submit"> Confirm your reservation.</button>
                </div>
            )}
        </form>
     );
}
 
export default BookingForm;