import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeItem, updateQuantity } from '../store/cartSlice';

const OrderList: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleQuantityChange = (id: string, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    return (
        <>
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            {items.length > 0 ? (
                <div className="w-10/12 flex flex-col gap-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="w-full flex items-center justify-between bg-white p-8 rounded-md shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.img}
                                    alt={item.meal}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <div>
                                    <h3 className="text-lg font-medium">{item.meal}</h3>
                                    <p className="text-sm text-gray-500">${item.price.toFixed(2)} USD</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, Number(e.target.value))
                                    }
                                    className="w-16 h-10 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
                                />
                                <button
                                    onClick={() => dispatch(removeItem(item.id))}
                                    className="w-10 h-10 bg-teal-500 text-white rounded-md hover:bg-teal-600"
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
        </>
    );
};

export default OrderList;
