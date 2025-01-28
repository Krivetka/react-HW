import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeItem, updateQuantity } from '../store/cartSlice';
import {IOrderMenuItem} from "../interfaces/MenuItem.interface.ts";

const OrderList: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleQuantityChange = (id: string, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const handleRemoveItem = (id: string) => {
        dispatch(removeItem(id));
    };

    const createQuantityChangeHandler = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const quantity = Number(event.target.value);
        handleQuantityChange(id, quantity);
    };

    const renderCartItem = (item: IOrderMenuItem) => (
        <div
            key={item.id}
            className="w-full flex items-center justify-between bg-white dark:bg-gray-800 p-8 rounded-md shadow-sm transition-colors duration-300"
        >
            <div className="flex items-center gap-4">
                <img
                    src={item.img}
                    alt={item.meal}
                    className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {item.meal}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        ${item.price.toFixed(2)} USD
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={createQuantityChangeHandler(item.id)}
                    className="w-16 h-10 text-center border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-teal-400 transition-colors duration-300"
                />
                <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="w-10 h-10 bg-teal-500 dark:bg-teal-400 text-white dark:text-gray-900 rounded-md hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors duration-300"
                >
                    X
                </button>
            </div>
        </div>
    );

    const renderCartItems = () => (
        <div className="w-10/12 flex flex-col gap-4">
            {items.map(renderCartItem)}
        </div>
    );

    return (
        <>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Your Cart
            </h2>
            {items.length > 0 ? (
                renderCartItems()
            ) : (
                <p className="text-center text-gray-500 dark:text-gray-400">
                    Your cart is empty.
                </p>
            )}
        </>
    );
};

export default OrderList;
