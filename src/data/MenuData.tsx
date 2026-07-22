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
        name: "Potato Salad",
        price: 299,
        category: "sides"
    },
    {
        id: 'm5',
        name: "Katsu Plate",
        price: 799,
        category: "plates"
    },
    {
        id: 'm6',
        name: "Hawaiian Rainbow Shaved Ice",
        price: 599,
        category: "desserts"
    },
    {
        id: 'm7',
        name: "Passion Fruit Iced Tea",
        price: 299,
        category: "drinks"
    },
    {
        id: 'm8',
        name: "Green Tea",
        price: 299,
        category: "drinks"
    },
    {
        id: 'm9',
        name: "Orange Bang",
        price: 299,
        category: "drinks"
    },
    {
        id: 'm10',
        name: "Grilled Short Rib Plate",
        price: 299,
        category: "plates"
    },
    {
        id: 'm11',
        name: "French Fries - small",
        price: 299,
        category: "sides"
    },
    {
        id: 'm12',
        name: "Vanilla Soft Served",
        price: 299,
        category: "desserts"
    },


]