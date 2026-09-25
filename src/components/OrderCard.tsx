import { type MenuItem } from "../data/MenuData";

const OrderCard: React.FC<{item: MenuItem}> = ({item}) => {
    return ( 
        <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        {/* Card Image with Tags */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          
        </div>

        {/* Card Content */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-snug">
              {item.name}
            </h3>
            <span className="text-lg font-extrabold text-red-800 dark:text-red-400 ml-2">
              ¥{item.price}
            </span>
          </div>
          
        </div>
      </div>

      {/* Action Button */}
      <div className="p-5 pt-0">
        <button
          type="button"
          className="w-full py-2.5 bg-red-800 hover:bg-red-900 text-white font-medium text-sm rounded-lg transition"
        >
          Add to Order
        </button>
      </div>
    </div>
     );
}
 
export default OrderCard;