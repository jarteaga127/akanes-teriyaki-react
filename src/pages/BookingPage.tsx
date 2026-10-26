import BookingForm from "../components/BookingForm";
import { Link } from "react-router-dom";

const BookingPage = () => {
    return ( 
        <section className="w-full bg-zinc-50 min-h-screen py-8 px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2a0808] tracking-tight mb-2">Let's get a table!</h1>
            <BookingForm/>
<Link to="/" className="inline-block text-white bg-red-800 hover:bg-red-900 px-6 py-2.5 text-sm font-medium transition-colors rounded-sm shadow-sm">Back to home</Link>
        </section>
     );
}
 
export default BookingPage;