import React from 'react';

interface CartIconProps {
    itemCount: number;
}

const CartIcon: React.FC<CartIconProps> = ({ itemCount }) => (
    <div className="relative">
        <div className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center text-white">
            🛒
        </div>
        {itemCount > 0 && (
            <div className="absolute top-0 right-0 w-5 h-5 bg-white rounded-full flex items-center justify-center text-teal-400 text-xs">
                {itemCount}
            </div>
        )}
    </div>
);

export default CartIcon;
