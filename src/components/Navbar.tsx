import { Link } from "react-router-dom";
import "../styles/nav-bar.css"

const Navbar = () => {
    return ( 
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
            <div className="site-logo"><header><Link to="/">Akane's Teriyaki</Link></header></div>
            <div className="nav-link-group">
            <ul>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/our-menu" className="nav-link">Our Menu</Link></li>
                <li><Link to="/book-a-table" className="nav-link">Book a table</Link></li>
                <li><Link to="/" className="nav-link">Order online</Link></li>
                <li><Link to="/about-us" className="nav-link">About us</Link></li>
                <li><Link to="/" className="nav-link">Contact us</Link></li>
            </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;