import { Link } from "react-router-dom";
import TeriAndFries from "../assets/pexels-roman-odintsov-5836771.jpg"

const AboutSec = () => {
    return ( 
        <section className="w-full flex flex-col md:flex-row bg-[#e3cdcd] py-16 md:py-24 px-6 border-t border-[#cbb3b3]">
<div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 bg-[#2a0808]/10 rounded-lg border border-[#2a0808]/20 overflow-hidden flex items-center justify-center">
 <img src={TeriAndFries} alt="The inside of a restaurant" />
</div>
<div className="flex md:w-1/2 flex-col items-start text-left space-y-4 px-4 py-3">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a0808] tracking-tight leading-tight">About us</h2>
    <p className="text-base sm:text-lg text-[#2a0808]/80 max-w-md">Born and raised in Southern California, we bring Teriyaki back to its place of origin: Tokyo, Japan. We specialize in Teriyaki Bowls, Burgers and more</p>
    
        <Link to="/about-us" className="inline-block w-full md:w-auto text-center border border-[#2a0808] text-[#2a0808] hover:bg-[#2a0808] hover:text-white px-6 py-2.5 text-sm sm:text-base font-medium transition-colors rounded-sm shadow-sm">Read about our story here.</Link>
        
</div>
        </section>
     );
}
 
export default AboutSec;