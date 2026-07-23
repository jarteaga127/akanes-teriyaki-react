export interface MenuItem {
    id: string;
    name: string;
    price: number;
    category: 'bowls' | 'plates' | 'sides' | 'desserts' | 'drinks';
}

export const menuData: MenuItem[] = [
    {
        id: 'm1',
        name: 'Teriyaki Chicken Bowl',
        price: 599,
        category: 'bowls'
    },
    {
        id: 'm2',
        name: 'Teriyaki Beef Bowl',
        price: 799,
        category: 'bowls'
    },
    {
        id: 'm3',
        name: 'Teriyaki Chick\'n Bowl (Plant-based)',
        price: 599,
        category: 'bowls'
    },
    {
        id: 'm4',
        name: "Teriyaki Chicken Plate",
        price: 799,
        category: "plates"
    },
    {
        id: 'm5',
        name: "Katsu Plate",
        price: 799,
        category: "plates"
    },
    {
        id: 'm6',
        name: "Teriyaki Chick\'n Plate (Plant-based",
        price: 799,
        category: "plates"
    },
    {
        id: 'm7',
        name: "French Fries - Small",
        price: 299,
        category: "sides"
    },
    {
        id: 'm8',
        name: "Potato Salad",
        price: 299,
        category: "sides"
    },
    {
        id: 'm9',
        name: "Egg Rolls - 3 pieces",
        price: 299,
        category: "sides"
    },
    {
        id: 'm10',
        name: "Hawaiian Shaved Ice - Cherry",
        price: 299,
        category: "desserts"
    },
    {
        id: 'm11',
        name: "Ice Cream - Vanilla",
        price: 299,
        category: "desserts"
    },
    {
        id: 'm12',
        name: "Hawaiian Shaved Ice - Mango",
        price: 299,
        category: "desserts"
    },
    {
        id: 'm13',
        name: "Passion Fruit Iced Tea",
        price: 299,
        category: "drinks"
    },
    {
        id: 'm14',
        name: "Green Tea - Unsweetened",
        price: 299,
        category: "drinks"
    },
    {
        id: 'm15',
        name: "Lemonade",
        price: 299,
        category: "drinks"
    },


]