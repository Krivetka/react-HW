export interface IMenuItem {
    id: string;
    meal: string;
    price: number;
    instructions: string;
    img: string;
    category: string;
}

export interface IOrderMenuItem extends Omit<IMenuItem, 'instructions' | 'category'> {
    quantity: number;
}