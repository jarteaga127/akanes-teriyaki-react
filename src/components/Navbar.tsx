import "../styles/nav-bar.css"

const Navbar = () => {
    return ( 
        <nav>
            <div className="site-logo"><header>Akane's Teriyaki</header></div>
            <div className="nav-link-group">
            <ul>
                <li>Home</li>
                <li>Our Menu</li>
                <li>Book a table</li>
                <li>Order online</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;