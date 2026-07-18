import { Link } from "react-router-dom";
import MenuCard from "../components/MenuCard";
import "../styles/our-menu.css"

const OurMenu = () => {
    return ( 
        <section>
            <h1>Our Menu</h1>
            <article>
                <h2>Bowls</h2>
                <div className="menu-grid">
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                </div>
            </article>
            <Link to="/" className="link-001">Back to home</Link>
        </section>
     );
}
 
export default OurMenu;