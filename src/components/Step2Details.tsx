import type { Step2Props } from "../types";

const Step2Details: React.FC<Step2Props> = ({formData, updateFields, onNext, onBack}) => {
    return ( 
      <div className="bg-[#f2e6e6] border border-[#2a0808]/15 rounded-md p-6 sm:p-8 space-y-6 shadow-sm max-w-xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#2a0808] border-l-4 border-[#2a0808] pl-3 tracking-wide">How can we contact you?</h3>
        <label htmlFor="name" className="text-sm font-bold text-[#2a0808]">Write your name here:</label>
                    <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    placeholder="Joseph Josephson"
                    required 
                    onChange={e => updateFields({name: e.target.value})} 
                    className="w-full bg-white text-[#2a0808] border border-[#2a0808]/30 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a0808] focus:border-transparent transition-all"/>
                    <label htmlFor="phone" className="text-sm font-bold text-[#2a0808]">Phone Number:</label>
                    <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={e => updateFields({phone: e.target.value})}
                    placeholder="18006667734"
                    className="w-full bg-white text-[#2a0808] border border-[#2a0808]/30 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a0808] focus:border-transparent transition-all"
                    />
                    <label htmlFor="email" className="text-sm font-bold text-[#2a0808]">Your email:</label>
                    <input 
                    type="text" 
                    name="email" 
                    value={formData.email} 
                    onChange={e => updateFields({email: e.target.value})} 
                    placeholder="joseph@kurumimail.com"
                    className="w-full bg-white text-[#2a0808] border border-[#2a0808]/30 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a0808] focus:border-transparent transition-all"
                    />
                    <div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                    <button type="button" 
                    onClick={onBack}
                    className="w-full cursor-pointer sm:w-auto border border-[#2a0808] text-[#2a0808] hover:bg-[#2a0808]/10 px-6 py-2.5 rounded text-sm font-medium transition-colors"
                    >Go back</button>
                    <button type="button" 
                    onClick={onNext}
                    disabled={!formData.name}
                    className="w-full cursor-pointer sm:w-auto bg-[#2a0808] text-white hover:bg-[#3d0c0c] disabled:bg-[#2a0808]/30 disabled:cursor-not-allowed px-6 py-2.5 rounded text-sm font-medium transition-colors shadow-sm"
                    > Confirm your reservation.</button>
                    </div>
      </div>  

     );
}
 
export default Step2Details;