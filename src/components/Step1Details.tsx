import type { Step1Props } from "../types";
import { TIME_SLOTS, SEAT_TYPES } from "../data/BookingData";

const Step1Details: React.FC<Step1Props> = ({formData, updateFields, onNext}) => {
    return ( 
        <div className="step-containter">
            <h2>Let's pick a date and time.</h2>
            <label htmlFor="date">What day will you be coming?</label>
                    <input type="date" name="date" value={formData.date} onChange={e => updateFields({date: e.target.value}) } min={new Date().toISOString().split('T')[0]} required/>
                    <label htmlFor="time">What time will you be coming?</label>
                    <select name="time" id="time" value={formData.time} onChange={e => updateFields({time: e.target.value})} required disabled={!formData.date}>
                        <option>{formData.date ? "Select a time" : "Please tell us what day you are coming first, please."}</option>
                        {TIME_SLOTS.map((slot) => (
                            <option key={slot.time} value={slot.time} disabled={!slot.isAvailable}>
                                {slot.label}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="guests">How many guests are you bringing?</label>
                    <input type="number" name="guests" value={formData.guests} onChange={e => updateFields({guests: parseInt(e.target.value, 10) || 1})} min={0} max={10} />
                    <label htmlFor="seatType">What kind of seat do you want?</label>
                    <select name="seatType" id="seatType" value={formData.seat} onChange={e=> updateFields({seat: e.target.value})} required >
                        <option>{formData.guests ? "Pick a seat" : "Please tell us how many people you are bringing first."} </option>
                        {SEAT_TYPES.map((type) => (
                            <option key={type.seat} value={type.seat} disabled={!type.isAvailable}>{type.label}</option>
                        ))}
                    </select>
                    <button type="button" onClick={onNext} disabled={!formData.date || !formData.time}>Next</button>
        </div>
     );
}
 
export default Step1Details;