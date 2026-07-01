import { Link } from "react-router-dom";

const BookingSec = () => {
    return ( 
        <section className="booking-sec">
            <div className="section-img"></div>
            <div className="section-text">
                <h2>Book a table with us.</h2>
                <p>Plan on eating out tonight? Book a table with us now.</p>
                <Link to="/" className="link-001">Book your table now</Link>
            </div>
        </section>
     );
}
 
export default BookingSec;