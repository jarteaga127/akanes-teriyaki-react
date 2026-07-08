import BookingForm from "../components/BookingForm";
import { Link } from "react-router-dom";

const BookingPage = () => {
    return ( 
        <section>
            <h1>Let's get a table!</h1>
            <BookingForm/>
<Link to="/" className="link-001">Back to home</Link>
        </section>
     );
}
 
export default BookingPage;