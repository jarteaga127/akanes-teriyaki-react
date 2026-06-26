import { useState } from "react";
import { BookingDetails } from "../types/";

const BookingForm = () => {
const [step, setStep] = useState(1);
const [formData, setFormData] = useState<Partial<BookingDetails>>({
    guests: 0,
    date: '',
    time: '',
    seatType: '',
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
};

const handleSubmit = (e: React.SubmitEvent) => {
e.preventDefault();
console.log("Thank you. Your table has been set.", formData);
setStep(3);
}

    return ( 
        <form onSubmit={handleSubmit}>
            {step === 1 && (
                <div>
                    <label htmlFor="">When will you be coming?</label>
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} />
                    <label htmlFor="">How many guests are you bringing?</label>
                    <input type="number" name="guests" value={formData.guests} onChange={handleInputChange} min={0} max={10} />
                </div>
            )}
            {step === 2 && (
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required onChange={handleInputChange} />
                    <button type="button" onClick={() => }></button>
                </div>
            )}
        </form>
     );
}
 
export default BookingForm;