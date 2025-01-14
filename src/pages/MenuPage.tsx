import React, { useState, useEffect } from 'react';
import Tooltip from "../components/Tooltip.tsx";
import CategoryButton from "../components/CategoryButton.tsx";
import MenuItem from "../components/MenuItem.tsx";
import { IMenuItem } from "../interfaces/MenuItem.interface.ts";

const MenuPage: React.FC = () => {
    const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);
    const [displayedItems, setDisplayedItems] = useState<IMenuItem[]>([]);
    const [activeCategory, setActiveCategory] = useState('Dessert');
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        const fetchMenuItems = async (): Promise<void> => {
            try {
                const response = await fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');
                const data = await response.json();
                setMenuItems(data);
                setDisplayedItems(data.slice(0, visibleCount));
            } catch (error) {
                console.error("Error fetching menu items:", error);
            }
        };
        fetchMenuItems();
    }, []);

    useEffect(():void => {
        const filteredItems = menuItems.filter(item => item.category === activeCategory);
        setDisplayedItems(filteredItems.slice(0, visibleCount));
    }, [menuItems, activeCategory, visibleCount]);

    const handleSeeMore = ():void => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    return (
        <div className="flex flex-col gap-4 justify-center items-center pb-40">
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
                {['Dessert', 'Breakfast', 'Dinner'].map(category => (
                    <CategoryButton
                        key={category}
                        label={category}
                        isActive={activeCategory === category}
                        onClick={() => {
                            setActiveCategory(category);
                            setVisibleCount(6);
                        }}
                    />
                ))}
            </div>

            <div className="grid gap-6 justify-items-start
                    grid-cols-1 lg:grid-cols-2">
                {displayedItems.map((item: IMenuItem) => (
                    <MenuItem
                        key={item.id}
                        id={item.id}
                        meal={item.meal}
                        price={item.price}
                        instructions={item.instructions}
                        img={item.img}
                    />
                ))}
        </div>

    {
        displayedItems.length < menuItems.filter(item => item.category === activeCategory).length && (
            <button
                    onClick={handleSeeMore}
                    className="mt-8 mx-auto bg-teal-500 text-white font-medium py-2 px-4 rounded-md hover:bg-teal-600"
                >
                    See more
                </button>
            )}
        </div>
    );
};

export default MenuPage;
