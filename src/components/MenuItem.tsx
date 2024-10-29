import React from 'react';

interface MenuItemProps {
    title: string;
    price: string;
    description: string;
    imageUrl: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, price, description, imageUrl }) => (
    <div className="relative w-[580px] h-52 bg-white rounded-md border border-teal-500/20 flex px-6 py-8">
        <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
            <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
        </div>

        <div className="ml-4 flex flex-col gap-2 w-full">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-zinc-950 text-lg font-medium tracking-wide">{title}</h3>
                <p className="text-teal-500 text-base font-medium">{price}</p>
            </div>

            <p className="text-slate-500 text-sm leading-snug tracking-tight">{description}</p>

            <div className="flex items-center space-x-4 mt-4">
                <div className="w-12 h-10 flex items-center justify-center bg-neutral-50 border border-neutral-200 rounded-md">
                    <span className="text-black font-medium">1</span>
                </div>
                <button className="w-32 h-10 bg-teal-500 text-white rounded-md text-center font-medium hover:bg-teal-600 transition-colors">
                    Add to cart
                </button>
            </div>
        </div>
    </div>
);

export default MenuItem;