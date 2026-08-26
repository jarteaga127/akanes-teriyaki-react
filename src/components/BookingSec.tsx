import { Link } from "react-router-dom";

const BookingSec = () => {
    return ( 
        <section className="w-full bg-[#e3cdcd] py-16 md:py-24 px-6 border-t border-[#cbb3b3]">
            <div className="section-img"></div>
            <div className="flex flex-col items-start text-left space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a0808] tracking-tight leading-tight">Book a table with us.</h2>
                <p className="text-base sm:text-lg text-[#2a0808]/80 max-w-md">Plan on eating out tonight? Book a table with us now.</p>
                
                <Link to="/book-a-table" className="inline-block border border-[#2a0808] text-[#2a0808] hover:bg-[#2a0808] hover:text-white px-6 py-2.5 text-sm sm:text-base font-medium transition-colors rounded-sm shadow-sm">Book your table now</Link>
            </div>
        </section>
     );
}
 
export default BookingSec;