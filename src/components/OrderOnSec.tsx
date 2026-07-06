import { Link } from "react-router-dom";

const OrderOnSec = () => {
    return ( 
        <section className="order-on-sec">
<div className="section-img"></div>
<div className="section-text">
    <h2>Order online</h2>
    <p>Feeling too lazy to go out? We'll bring our food to your door.</p>
    <Link to="/" className="link-001">Order online now.</Link>
</div>
        </section>
     );
}
 
export default OrderOnSec;