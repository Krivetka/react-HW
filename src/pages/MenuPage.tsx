import React, { useState } from 'react';
import Tooltip from "../components/Tooltip.tsx";
import CategoryButton from "../components/CategoryButton.tsx";
import MenuItem from "../components/MenuItem.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const MenuPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Desert');

    const menuItems = [
        { title: "Burger Waldo", price: "$ 9.20 USD", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageUrl: "https://via.placeholder.com/120" },
        { title: "Burger Bacon Buddy", price: "$ 10.00 USD", description: "Bacon lover's dream burger.", imageUrl: "https://via.placeholder.com/120" },
        { title: "Burger Classic", price: "$ 8.00 USD", description: "Classic burger with traditional toppings.", imageUrl: "https://via.placeholder.com/120" },
        { title: "Burger Spicy", price: "$ 9.99 USD", description: "Spicy burger with a kick.", imageUrl: "https://via.placeholder.com/120" },
        { title: "Burger Cali", price: "$ 9.20 USD", description: "A delicious burger inspired by California flavors.", imageUrl: "https://via.placeholder.com/120" },
        { title: "Burger Double Trouble", price: "$ 8.00 USD", description: "Double patty with all the extras.", imageUrl: "https://via.placeholder.com/120" },
    ];

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <Header />

            <div className="text-center text-teal-500 text-5xl font-normal mb-4">
                Browse our menu
                <p className="max-w-md mt-4 text-center text-slate-500 text-base leading-relaxed tracking-tight">
                    Use our menu to place an order online, or{' '}
                    <Tooltip text="+8 (800) 888-8888">
                        <span className="text-teal-500">phone</span>
                    </Tooltip>{' '}
                    our store to place a pickup order. Fast and fresh food.
                </p>
            </div>

            <div className="flex justify-center w-full space-x-4 my-4">
                {['Desert', 'Breakfast', 'Dinner'].map(category => (
                    <CategoryButton
                        key={category}
                        label={category}
                        isActive={activeCategory === category}
                        onClick={() => setActiveCategory(category)}
                    />
                ))}
            </div>

            <div className="flex flex-wrap gap-6 justify-center mx-auto px-8">
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>

            <button className="mt-8 mx-auto mb-40 bg-teal-500 text-white font-medium py-2 px-4 rounded-md hover:bg-teal-600">
                See more
            </button>

            <Footer />
        </div>
    );
};

export default MenuPage;
