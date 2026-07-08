import { Link } from "react-router-dom";
import "../styles/hero-sec.css"

const HeroSec = () => {
    return ( 
        <section className="hero-sec">
            <div className="hero-text">
                <h1>Welcome to Akane's Teriyaki Grill</h1>
                <Link to="/our-menu" className="link-001">Check out our menu.</Link>
            </div>
        </section>
     );
}
 
export default HeroSec;