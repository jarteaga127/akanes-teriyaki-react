import { Link } from "react-router-dom";

const OrderOnSec = () => {
    return ( 
        <section className="w-full flex flex-col md:flex-row-reverse bg-[#e3cdcd] py-16 md:py-24 px-6 border-t border-[#cbb3b3]">
<div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 bg-[#2a0808]/10 rounded-lg border border-[#2a0808]/20 overflow-hidden flex items-center justify-center "></div>            
            <div className="flex md:w-1/2 flex-col items-start text-left space-y-4 px-4 py-3">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a0808] tracking-tight leading-tight">Order online</h2>
    <p className="text-base sm:text-lg text-[#2a0808]/80 max-w-md">Feeling too lazy to go out? We'll bring our food to your door.</p>
    
     <Link to="/" className="inline-block w-full text-center border border-[#2a0808] text-[#2a0808] hover:bg-[#2a0808] hover:text-white px-6 py-2.5 text-sm sm:text-base font-medium transition-colors rounded-sm shadow-sm">Order online now.</Link>    
</div>
        </section>
     );
}
 
export default OrderOnSec;