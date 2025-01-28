import { Component } from 'react';

interface CategoryButtonProps {
    label: string;
    isActive?: boolean;
    onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-36 px-4 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
            isActive
                ? 'bg-teal-500 text-white dark:bg-teal-400 dark:text-gray-900'
                : 'border border-slate-300 text-neutral-800 dark:border-gray-700 dark:text-gray-300'
        }`}
    >
        {label}
    </button>
);

export default CategoryButton;
