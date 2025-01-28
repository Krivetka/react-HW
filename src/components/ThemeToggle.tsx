import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full transition duration-300"
        >
            {theme === 'dark' ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-yellow-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1.5M16.95 5.05l-1.06 1.06M21 12h-1.5M16.95 18.95l-1.06-1.06M12 21v-1.5M7.05 18.95l1.06-1.06M3 12h1.5M7.05 5.05l1.06 1.06M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 018.486 3.216a7.5 7.5 0 0010.29 10.29 9.716 9.716 0 012.976 1.497z"
                    />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;
