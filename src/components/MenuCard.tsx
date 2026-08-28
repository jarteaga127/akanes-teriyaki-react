import { type MenuItem } from "../data/MenuData";

interface MenuCardProps {
    item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({item}) => {
    return ( 
        <div className="menu-card" key={item.id}>
            <div className="menu-card-img"></div>
            <div className="menu-card-text">
                <div className="font-bold text-lg text-[#2a0808]">{item.name}</div>
                <div className="font-bold text-sm text-[#2a0808] bg-[#2a0808]/10 px-2 py-0.5 rounded">￥{item.price}</div>
            </div>
        </div>
     );
}
 
export default MenuCard;