import React, { useState } from 'react';

const OrderForm: React.FC = () => {
    const [formData, setFormData] = useState({
        street: '',
        house: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Order placed for Street: ${formData.street}, House: ${formData.house}`);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 items-center"
            >
                <div className="flex items-center gap-6">
                    <label
                        htmlFor="street"
                        className="w-16 text-sm font-medium text-black dark:text-gray-300"
                    >
                        Street
                    </label>
                    <input
                        id="street"
                        type="text"
                        value={formData.street}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        placeholder="Enter street"
                    />
                </div>

                <div className="flex items-center gap-6 mb-2">
                    <label
                        htmlFor="house"
                        className="w-16 text-sm font-medium text-black dark:text-gray-300"
                    >
                        House
                    </label>
                    <input
                        id="house"
                        type="text"
                        value={formData.house}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        placeholder="Enter house"
                    />
                </div>

                <button
                    type="submit"
                    className="w-32 px-4 py-2 bg-teal-500 text-white dark:bg-teal-400 dark:text-gray-900 rounded-md font-medium hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors"
                >
                    Order
                </button>
            </form>
        </>
    );
};

export default OrderForm;
