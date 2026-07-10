import { Link } from "react-router-dom";

const AboutSec = () => {
    return ( 
        <section className="about-sec">
<div className="section-img"></div>
<div className="section-text">
    <h2>About us</h2>
    <p>Born and raised in Southern California, we bring Teriyaki back to its place of origin: Tokyo, Japan. We specialize in Teriyaki Bowls, Burgers and more</p>
    
        <Link to="/" className="link-001">Read about our story here.</Link>
        
</div>
        </section>
     );
}
 
export default AboutSec;