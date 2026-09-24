export interface MenuItem {
    id: string;
    name: string;
    price: number;
    image: string;
    category: 'bowls' | 'plates' | 'sides' | 'desserts' | 'drinks';
}

export const menuData: MenuItem[] = [
    {
        id: 'm1',
        name: 'Teriyaki Chicken Bowl',
        price: 599,
        category: 'bowls',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm2',
        name: 'Teriyaki Beef Bowl',
        price: 799,
        category: 'bowls',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm3',
        name: 'Teriyaki Chick\'n Bowl (Plant-based)',
        price: 599,
        category: 'bowls',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm4',
        name: "Teriyaki Chicken Plate",
        price: 799,
        category: "plates",
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm5',
        name: "Katsu Plate",
        price: 799,
        category: "plates",
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm6',
        name: "Teriyaki Chick\'n Plate (Plant-based",
        price: 799,
        category: "plates",
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm7',
        name: "French Fries - Small",
        price: 299,
        category: "sides",
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm8',
        name: "Potato Salad",
        price: 299,
        category: "sides",
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm9',
        name: "Egg Rolls - 3 pieces",
        price: 299,
        category: "sides",
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm10',
        name: "Hawaiian Shaved Ice - Cherry",
        price: 299,
        category: "desserts",
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm11',
        name: "Ice Cream - Vanilla",
        price: 299,
        category: "desserts",
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm12',
        name: "Hawaiian Shaved Ice - Mango",
        price: 299,
        category: "desserts",
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm13',
        name: "Passion Fruit Iced Tea",
        price: 299,
        category: "drinks",
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm14',
        name: "Green Tea - Unsweetened",
        price: 299,
        category: "drinks",
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'm15',
        name: "Lemonade",
        price: 299,
        category: "drinks",
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },


]