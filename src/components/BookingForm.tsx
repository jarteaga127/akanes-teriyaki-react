import { useState } from "react";
import type { BookingDetails } from "../types";
import "../styles/booking-form.css"
import Step1Details from "./Step1Details";
import Step2Details from "./Step2Details";
import Step3Details from "./Step3Details";
import Step4Details from "./Step4Details";

const INITIAL_DATA: BookingDetails = {
    id: '',
  guests: 1,
  date: '',
  time: '',
  seat: '',
  name: '',
  email: '',
  phone: '',
}

const BookingForm: React.FC = () => {
const [step, setStep] = useState<number>(1);
const [formData, setFormData] = useState<BookingDetails>(INITIAL_DATA);

const updateFields = (fields: Partial<BookingDetails>) => {
setFormData((prev) => ({ ...prev, ...fields }));    
}

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
};

const nextStep = () => setStep(prev => prev + 1);
const prevStep = () => setStep(prev => prev - 1);

const handleFinalSubmit = () => {
    const finalBooking: BookingDetails = {
      ...formData,
      id: `bk-${Math.random().toString(36).substring(2, 9)}`,
};


//Pull available bookings from local storage or create an empty array if none exist
const availBookings = JSON.parse(localStorage.getItem('restaurant_bookings') || '[]')

availBookings.push(finalBooking);

localStorage.setItem('restaurant_bookings', JSON.stringify(availBookings));

setStep(4);
}

const resetForm = () => {
setFormData(INITIAL_DATA);
    setStep(1);
}

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Let's get a table.</h2>
        <div className="step-indicator">
            <span className={step >= 1 ? 'active' : ''}>1. Pick a date and table</span>
        <span className={step >= 2 ? 'active' : ''}>2. How can we contact you?</span>
        <span className={step >= 3 ? 'active' : ''}>3. Review your booking</span>
        </div>
        
            {step === 1 && (
                <Step1Details
                formData={formData}
          updateFields={updateFields}
          onNext={nextStep}
                />
            )}
            {step === 2 && (
                <Step2Details
                formData={formData}
          updateFields={updateFields}
          onNext={nextStep}
          onBack={prevStep}
                />
            )}
            {step === 3 && (
                <Step3Details
                formData={formData}
          onConfirm={handleFinalSubmit}
          onBack={prevStep}
                />
            )}
            {step === 4 && (
          <Step4Details
          formData={formData}
          resetForm={resetForm}
          />
        )}
        </form>
     );
}
 
export default BookingForm;