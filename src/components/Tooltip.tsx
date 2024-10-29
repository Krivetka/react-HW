import React, { useState } from 'react';

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <span
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className="relative cursor-pointer"
        >
            {children}
            {isVisible && (
                <div className="absolute top-full left-1/2 text-nowrap transform -translate-x-1/2 mt-2 bg-gray-700 text-white text-xs rounded-md p-2">
                    {text}
                </div>
            )}
        </span>
    );
};

export default Tooltip;
