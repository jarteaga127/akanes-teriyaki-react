import type { Step1Props } from "../types";
import { TIME_SLOTS, SEAT_TYPES } from "../data/BookingData";

const Step1Details: React.FC<Step1Props> = ({formData, updateFields, onNext}) => {
    return ( 
        <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2a0808] border-l-4 border-[#2a0808] pl-3 tracking-wide">Let's pick a date and time.</h2>
            <div className="space-y-4">
            <div className="flex flex-col space-y-1.5">
            <label htmlFor="date" className="text-sm font-bold text-[#2a0808]">What day will you be coming?</label>
                    <input type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={e => updateFields({date: e.target.value}) } 
                    min={new Date().toISOString().split('T')[0]} 
                    required 
                    className="w-full bg-white text-[#2a0808] border border-[#2a0808]/30 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a0808] focus:border-transparent transition-all"/>
                    <label htmlFor="time" className="text-sm font-bold text-[#2a0808]">What time will you be coming?</label>
                    <select name="time" 
                    id="time" value={formData.time} 
                    onChange={e => updateFields({time: e.target.value})} 
                    required 
                    disabled={!formData.date} 
                    className="w-full bg-white text-[#2a0808] border border-[#2a0808]/30 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a0808] focus:border-transparent disabled:bg-[#2a0808]/10 disabled:text-[#2a0808]/40 disabled:cursor-not-allowed transition-all">
                        <option>{formData.date ? "Select a time" : "Please tell us what day you are coming first, please."}</option>
                        {TIME_SLOTS.map((slot) => (
                            <option key={slot.time} value={slot.time} disabled={!slot.isAvailable}>
                                {slot.label}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <label htmlFor="guests" className="text-sm font-bold text-[#2a0808]">How many are in your party?</label>
                    <input type="number" 
                    name="guests" 
                    id="guests"
                    value={formData.guests} 
                    onChange={e => updateFields({guests: parseInt(e.target.value, 10) || 1})} 
                    min={0} 
                    max={10} 
                    required
                    disabled={!formData.time}
                    className="w-full bg-white text-[#2a0808] border border-[#2a0808]/30 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a0808] focus:border-transparent transition-all"/>
                   </div> 
                   <div className="flex flex-col space-y-1.5">
                    <label htmlFor="seatType" className="text-sm font-bold text-[#2a0808]">What kind of seat do you want?</label>
                    <select 
                    name="seatType" 
                    id="seatType" 
                    value={formData.seat} 
                    onChange={e=> updateFields({seat: e.target.value})} 
                    required 
                    disabled={!formData.guests}
                        className="w-full bg-white text-[#2a0808] border border-[#2a0808]/30 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a0808] focus:border-transparent transition-all">
                        <option>{formData.guests ? "Pick a seat" : "Please tell us how many people you are bringing first."} </option>
                        {SEAT_TYPES.map((type) => (
                            <option key={type.seat} value={type.seat} disabled={!type.isAvailable}>{type.label}</option>
                        ))}
                    </select>
                    </div>
                    <div className="pt-4 flex justify-end">
                    <button type="button" onClick={onNext} disabled={!formData.date || !formData.time} className="w-full cursor-pointer sm:w-auto bg-[#2a0808] text-white hover:bg-[#3d0c0c] disabled:bg-[#2a0808]/30 disabled:cursor-not-allowed px-8 py-2.5 rounded text-sm font-medium transition-colors shadow-sm">Next</button>
        </div >
        </div>
        </div>
     );
}
 
export default Step1Details;