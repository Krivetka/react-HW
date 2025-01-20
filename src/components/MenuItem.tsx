import React, { useState } from 'react';
import { IMenuItem } from "../interfaces/MenuItem.interface.ts";
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

const MenuItem: React.FC<Omit<IMenuItem, 'category'>> = ({ id, meal, price, instructions, img }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Number(event.target.value);
        if (newQuantity > 0) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            dispatch(
                addItem({
                    id,
                    meal,
                    price,
                    img,
                    quantity,
                })
            );
        }
    };

    return (
        <div className="relative max-w-[580px] bg-white dark:bg-gray-800 rounded-md border border-teal-500/20 dark:border-gray-700 flex px-6 py-8 transition-colors duration-300">
            <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover" src={img} alt={meal}/>
            </div>

            <div className="ml-4 flex flex-col gap-2 w-full">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-zinc-950 dark:text-gray-100 text-lg font-medium tracking-wide">{meal}</h3>
                    <p className="text-teal-500 dark:text-teal-400 text-base font-medium whitespace-nowrap">
                        ${price.toFixed(2)} USD
                    </p>
                </div>

                <p className="text-slate-500 dark:text-gray-400 text-sm leading-snug tracking-tight line-clamp-2">
                    {instructions}
                </p>

                <div className="flex items-center space-x-4 mt-4">
                    <input
                        type="number"
                        value={quantity}
                        min="1"
                        onChange={handleQuantityChange}
                        className="w-12 h-10 text-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:ring-2 focus:ring-teal-400 transition-colors"
                    />
                    <button
                        onClick={handleAddToCart}
                        className="w-32 h-10 bg-teal-500 dark:bg-teal-400 text-white dark:text-gray-900 rounded-md text-center font-medium hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
