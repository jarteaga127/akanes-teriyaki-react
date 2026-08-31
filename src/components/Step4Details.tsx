import type { Step4Props } from "../types";

const Step4Details: React.FC<Step4Props> = ({formData, resetForm}) => {
    return (
    <div className="bg-[#f2e6e6] border border-[#2a0808]/15 rounded-md p-8 sm:p-10 text-center space-y-6 shadow-sm max-w-xl mx-auto">
      
      {/* Icon & Heading */}
      <div className="space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2a0808]/10 text-3xl mb-2">
          🎉
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2a0808] tracking-tight">
          Reservation Confirmed!
        </h2>
        <p className="text-base text-[#2a0808]/80 font-medium">
          We look forward to hosting you, <span className="font-bold text-[#2a0808]">{formData.name || "Guest"}</span>.
        </p>
      </div>

      {/* Confirmation Details Card */}
      <div className="bg-white border border-[#2a0808]/20 rounded-md p-5 text-left text-sm text-[#2a0808] space-y-2">
        <h3 className="font-bold text-xs uppercase tracking-wider text-[#2a0808]/60 border-b border-[#2a0808]/10 pb-2 mb-3">
          Summary Details
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-[#2a0808]/70">Date & Time:</span>
          <span className="font-semibold">{formData.date} at {formData.time}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#2a0808]/70">Party Size:</span>
          <span className="font-semibold">{formData.guests} {formData.guests === 1 ? 'person' : 'people'}</span>
        </div>
        {formData.seat && (
          <div className="flex justify-between items-center">
            <span className="text-[#2a0808]/70">Seating:</span>
            <span className="font-semibold capitalize">{formData.seat}</span>
          </div>
        )}
      </div>

      <p className="text-xs text-[#2a0808]/60">
        A confirmation email will be sent to <span className="font-semibold">{formData.email || "your provided email"}</span>.
      </p>

      {/* Reset Action */}
      <div className="pt-2">
        <button
          type="button"
          onClick={resetForm}
          className="w-full sm:w-auto bg-[#2a0808] text-white hover:bg-[#3d0c0c] px-8 py-3 rounded text-sm font-medium transition-colors shadow-sm"
        >
          Book Another Table
        </button>
      </div>

    </div>
  );
}
 
export default Step4Details;