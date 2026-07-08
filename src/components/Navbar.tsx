import { Link } from "react-router-dom";
import "../styles/nav-bar.css"

const Navbar = () => {
    return ( 
        <nav>
            <div className="site-logo"><header><Link to="/">Akane's Teriyaki</Link></header></div>
            <div className="nav-link-group">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/our-menu">Our Menu</Link></li>
                <li><Link to="/book-a-table">Book a table</Link></li>
                <li><Link to="/">Order online</Link></li>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/">Contact us</Link></li>
            </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;