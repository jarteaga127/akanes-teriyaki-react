import type { Step3Props } from "../types";

const Step3Details: React.FC<Step3Props> = ({ formData, onConfirm, onBack }) => {
  return (
    <div className="bg-[#f2e6e6] border border-[#2a0808]/15 rounded-md p-6 sm:p-8 space-y-6 shadow-sm max-w-xl mx-auto">
      
      {/* Section Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2a0808] border-l-4 border-[#2a0808] pl-3 tracking-wide">
          Review your reservation details
        </h2>
        <p className="text-sm text-[#2a0808]/70 mt-2 pl-4">
          Please make sure everything looks correct before confirming.
        </p>
      </div>

      {/* Review Card Summary */}
      <div className="bg-white border border-[#2a0808]/20 rounded-md p-5 space-y-3 text-sm text-[#2a0808]">
        
        {/* Contact Info */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#2a0808]/70">Name:</span>
            <span className="font-semibold">{formData.name || '—'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#2a0808]/70">Email:</span>
            <span className="font-semibold">{formData.email || '—'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#2a0808]/70">Phone:</span>
            <span className="font-semibold">{formData.phone || '—'}</span>
          </div>
        </div>

        <hr className="border-[#2a0808]/15 my-3" />

        {/* Booking Details */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#2a0808]/70">Date:</span>
            <span className="font-semibold">{formData.date || '—'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#2a0808]/70">Time:</span>
            <span className="font-semibold">{formData.time || '—'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#2a0808]/70">Guests:</span>
            <span className="font-semibold">{formData.guests} {formData.guests === 1 ? 'person' : 'people'}</span>
          </div>
          {formData.seat && (
            <div className="flex justify-between items-center">
              <span className="font-bold text-[#2a0808]/70">Seating:</span>
              <span className="font-semibold capitalize">{formData.seat}</span>
            </div>
          )}
        </div>

      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto border border-[#2a0808] text-[#2a0808] hover:bg-[#2a0808]/10 px-6 py-2.5 rounded text-sm font-medium transition-colors"
        >
          ← Edit Details
        </button>

        <button
          type="submit"
          onClick={onConfirm}
          className="w-full sm:w-auto bg-[#2a0808] text-white hover:bg-[#3d0c0c] px-6 py-2.5 rounded text-sm font-medium transition-colors shadow-sm"
        >
          Confirm & Book Table
        </button>
      </div>

    </div>
  );
};

export default Step3Details;