import { Link } from "react-router-dom";
import MenuCard from "../components/MenuCard";
import { type MenuItem, menuData } from "../data/MenuData";
import "../styles/our-menu.css"

const OurMenu: React.FC = () => {
const bowls = menuData.filter(item => item.category === 'bowls');
const plates = menuData.filter(item => item.category === 'plates');
const sides = menuData.filter(item => item.category === 'sides');
const desserts = menuData.filter(item => item.category === 'desserts');
const drinks = menuData.filter(item => item.category === 'drinks');


    return ( 
        <section>
            <h1>Our Menu</h1>
            <article>
                <h2>Bowls</h2>
                <div className="menu-grid">
                    {bowls.map((item: MenuItem) => (
                        <MenuCard key={item.id} item={item}/>
                    ))}
                </div>
            </article>
            <article>
                <h2>Plates</h2>
                <div className="menu-grid">
                    {plates.map((item: MenuItem) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                    
                </div>
            </article>
            <article>
                <h2>Sides</h2>
                <div className="menu-grid">
                    {sides.map((item: MenuItem) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                    
                </div>
            </article>
            <article>
                <h2>Desserts</h2>
                <div className="menu-grid">
                    {desserts.map((item: MenuItem) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                    
                </div>
            </article>
            <article>
                <h2>Drinks</h2>
                <div className="menu-grid">
                    {drinks.map((item: MenuItem) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </div>
            </article>
            <Link to="/" className="link-001">Back to home</Link>
        </section>
     );
}
 
export default OurMenu;