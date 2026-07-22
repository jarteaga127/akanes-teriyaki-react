import { type MenuItem } from "../data/MenuData";

interface MenuCardProps {
    item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({item}) => {
    return ( 
        <div className="menu-card" key={item.id}>
            <div className="menu-card-img"></div>
            <div className="menu-card-text">
                <div className="item-name">{item.name}</div>
                <div className="item-price">￥{item.price}</div>
            </div>
        </div>
     );
}
 
export default MenuCard;