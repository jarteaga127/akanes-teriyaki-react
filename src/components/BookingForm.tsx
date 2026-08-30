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
        <div className="w-full max-w-2xl mx-auto mb-8 px-2">
  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-4 bg-[#2a0808]/5 p-3 rounded-md border border-[#2a0808]/15">
    
    {/* Step 1 */}
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded text-xs sm:text-sm font-semibold transition-all ${
        step >= 1
          ? 'bg-[#2a0808] text-white shadow-sm'
          : 'bg-transparent text-[#2a0808]/40'
      }`}
    >
      <span className={`flex items-center justify-center w-5 h-5 rounded-full text-xs ${
        step > 1 ? 'bg-red-200 text-[#2a0808]' : step === 1 ? 'bg-white text-[#2a0808]' : 'bg-[#2a0808]/10 text-[#2a0808]/50'
      }`}>
        {step > 1 ? '✓' : '1'}
      </span>
      <span>Pick a date and table</span>
    </div>

    {/* Divider Arrow for Desktop */}
    <span className="hidden sm:inline text-[#2a0808]/30 font-bold text-xs">→</span>

    {/* Step 2 */}
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded text-xs sm:text-sm font-semibold transition-all ${
        step >= 2
          ? 'bg-[#2a0808] text-white shadow-sm'
          : 'bg-transparent text-[#2a0808]/40'
      }`}
    >
      <span className={`flex items-center justify-center w-5 h-5 rounded-full text-xs ${
        step > 2 ? 'bg-red-200 text-[#2a0808]' : step === 2 ? 'bg-white text-[#2a0808]' : 'bg-[#2a0808]/10 text-[#2a0808]/50'
      }`}>
        {step > 2 ? '✓' : '2'}
      </span>
      <span>How can we contact you?</span>
    </div>

    {/* Divider Arrow for Desktop */}
    <span className="hidden sm:inline text-[#2a0808]/30 font-bold text-xs">→</span>

    {/* Step 3 */}
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded text-xs sm:text-sm font-semibold transition-all ${
        step >= 3
          ? 'bg-[#2a0808] text-white shadow-sm'
          : 'bg-transparent text-[#2a0808]/40'
      }`}
    >
      <span className={`flex items-center justify-center w-5 h-5 rounded-full text-xs ${
        step === 3 ? 'bg-white text-[#2a0808]' : 'bg-[#2a0808]/10 text-[#2a0808]/50'
      }`}>
        3
      </span>
      <span>Review your booking</span>
    </div>

  </div>
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