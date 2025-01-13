import React, { useState } from 'react';

const OrderForm: React.FC = () => {
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');

    const handleOrder = () => {
        alert(`Order placed for Street: ${street}, House: ${house}`);
    };

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleOrder();
                }}
                className="flex flex-col gap-4 items-center"
            >
                <div className="flex items-center gap-6">
                    <label htmlFor="street" className="w-16 text-sm font-medium text-black">
                        Street
                    </label>
                    <input
                        id="street"
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        placeholder="Enter street"
                    />
                </div>

                <div className="flex items-center gap-6">
                    <label htmlFor="house" className="w-16 text-sm font-medium text-black">
                        House
                    </label>
                    <input
                        id="house"
                        type="text"
                        value={house}
                        onChange={(e) => setHouse(e.target.value)}
                        className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        placeholder="Enter house"
                    />
                </div>

                <button
                    type="submit"
                    className="w-32 px-4 py-2 bg-teal-500 text-white rounded-md font-medium hover:bg-teal-600 transition-colors"
                >
                    Order
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
