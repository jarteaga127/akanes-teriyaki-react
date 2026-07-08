import { Link } from "react-router-dom";
import "../styles/footer.css"

const Footer = () => {
    return ( 
        <footer>
             <div className="footer-column">
               <dl>
                <dt>Akane's Teriyaki Grill</dt>
                <dd>〒123-4567 Tokyo, Nerima-ku 1-23-4 Shizuku Building 1F</dd>
                <dt>TEL:</dt>
                <dd>012-3456-7890</dd>
                <dt>OPEN</dt>
                <dd>11:00 A.M. ~ 11:00 P.M. (Eat in closes at 10:30 P.M.) </dd>
               </dl>
            </div>
            <div className="footer-column">
                <header>Akane's Teriyaki Grill</header>
                <ul>
                    <li><Link to="/" className="link-001">Home</Link></li>
                    <li><Link to="/" className="link-001">Our menu</Link></li>
                    <li><Link to="/" className="link-001">Book a table</Link></li>
                    <li><Link to="/" className="link-001">Order online</Link></li>
                    <li><Link to="/" className="link-001">Contact us</Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Follow us online!</h2>
                <ul>
                    <li><Link to="/" className="link-001">X/Twitter/Whatever</Link></li>
                    <li><Link to="/" className="link-001">Facebook</Link></li>
                    <li><Link to="/" className="link-001">Instagram</Link></li>
                    <li><Link to="/" className="link-001">Pinterest</Link></li>
                    <li><Link to="/" className="link-001">Youtube</Link></li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;
<footer>
    
</footer>