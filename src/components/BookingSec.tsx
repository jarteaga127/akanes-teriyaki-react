import { Link } from "react-router-dom";
import Restaurant from "../assets/pexels-saba-foods-2148476407-30119014.jpg"

const BookingSec = () => {
    return ( 
        <section className="w-full flex flex-col md:flex-row bg-[#e3cdcd] py-16 md:py-24 px-6 border-t border-[#cbb3b3]">
            <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 bg-[#2a0808]/10 rounded-lg border border-[#2a0808]/20 overflow-hidden flex items-center justify-center">
            <img src={Restaurant} alt="The inside of a restaurant" />
            </div>
            <div className="flex md:w-1/2 flex-col items-start text-left space-y-4 px-4 py-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a0808] tracking-tight leading-tight">Book a table with us.</h2>
                <p className="text-base sm:text-lg text-[#2a0808]/80 max-w-md">Plan on eating out tonight? Book a table with us now.</p>
                
                <Link to="/book-a-table" className="w-full md:w-auto bg-red-800 text-center px-6 py-3 rounded-md text-white hover:bg-red-900 transition mt-6 font-medium shadow-lg">Book your table now</Link>
            </div>
        </section>
     );
}
 
export default BookingSec;