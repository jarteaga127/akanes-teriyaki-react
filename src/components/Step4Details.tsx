import type { Step4Props } from "../types";

const Step4Details: React.FC<Step4Props> = ({formData, resetForm}) => {
    return ( 
        <div className="step-container">
            <h3>🎉 Reservation Confirmed!</h3>
            <p>We look forward to hosting you, {formData.name}.</p>
            <button type="button" onClick={resetForm}>
              Book Another Table
            </button>
        </div>
     );
}
 
export default Step4Details;