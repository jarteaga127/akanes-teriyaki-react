import type { Step3Props } from "../types";

const Step3Details: React.FC<Step3Props> = ({formData, onConfirm, onBack}) => {
    return ( 
        <div className="step-container">
            <h2>Review your reservation details</h2>
            <p>Please make sure everything looks correct before confirming.</p>
            <div className="review-card">
              <div className="review-row"><strong>Name:</strong> {formData.name}</div>
              <div className="review-row"><strong>Email:</strong> {formData.email}</div>
              <div className="review-row"><strong>Phone:</strong> {formData.phone}</div>
              <hr />
              <div className="review-row"><strong>Date:</strong> {formData.date}</div>
              <div className="review-row"><strong>Time:</strong> {formData.time}</div>
              <div className="review-row"><strong>Guests:</strong> {formData.guests}</div>
            </div>
            <div className="btn-group">
              <button type="button" onClick={onBack}>Edit Details</button>
              {/* This button actually submits the form */}
              <button type="submit" className="confirm-btn" onClick={onConfirm}>Confirm & Book Table</button>
            </div>
        </div>
     );
}
 
export default Step3Details;