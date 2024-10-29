import React from 'react';

interface CategoryButtonProps {
    label: string;
    isActive?: boolean;
    onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-36 px-4 py-2 rounded-md text-base font-medium ${
            isActive ? 'bg-teal-500 text-white' : 'border border-slate-300 text-neutral-800'
        }`}
    >
        {label}
    </button>
);

export default CategoryButton;
