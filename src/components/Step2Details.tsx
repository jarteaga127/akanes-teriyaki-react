import type { Step2Props } from "../types";

const Step2Details: React.FC<Step2Props> = ({formData, updateFields, onNext, onBack}) => {
    return ( 
      <div className="step-container">
        <h3>How can we contact you?</h3>
        <label htmlFor="name">Write your name here:</label>
                    <input type="text" name="name" value={formData.name} required onChange={e => updateFields({name: e.target.value})} />
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" name="phone" value={formData.phone} onChange={e => updateFields({phone: e.target.value})}/>
                    <label htmlFor="email">Your email:</label>
                    <input type="text" name="email" value={formData.email} onChange={e => updateFields({email: e.target.value})} />
                    <button type="button" onClick={onBack}>Go back</button>
                    <button type="button" onClick={onNext}> Confirm your reservation.</button>
      </div>  

     );
}
 
export default Step2Details;