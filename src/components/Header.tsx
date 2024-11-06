import React from 'react';
import Logo from "./Logo.tsx";

const Header: React.FC = () => {
    return (
        <header className="w-full h-24 bg-white flex justify-between items-center px-32 shadow-md">
            <Logo width={40} height={44} />


            <div className="flex gap-24 items-center">
                <nav className="flex space-x-8">
                    <a href="#" className="text-indigo-950 text-base font-normal hover:text-teal-400">Home</a>
                    <a href="#" className="text-teal-400 text-base font-normal">Menu</a>
                    <a href="#" className="text-indigo-950 text-base font-normal hover:text-teal-400">Company</a>
                    <a href="#" className="text-indigo-950 text-base font-normal hover:text-teal-400">Login</a>
                </nav>

                <div className="relative">
                    <div className="w-12 h-12 bg-teal-500 rounded-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none">
                            <g clipPath="url(#clip0_1_651)">
                                <path
                                    d="M3.83225 2H0V0H6.46187L7.12189 4H23.5294V9.93845L5.54325 12.3694L3.83225 2ZM22.7941 17C21.5758 17 20.5882 16.3284 20.5882 15.5C20.5882 14.6716 21.5758 14 22.7941 14C24.0124 14 25 14.6716 25 15.5C25 16.3284 24.0124 17 22.7941 17ZM8.08823 17C6.86996 17 5.88235 16.3284 5.88235 15.5C5.88235 14.6716 6.86996 14 8.08823 14C9.30651 14 10.2941 14.6716 10.2941 15.5C10.2941 16.3284 9.30651 17 8.08823 17Z"
                                    fill="white"/>
                            </g>
                        </svg>
                    </div>
                    <div
                        className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full text-teal-500 text-xs font-bold flex items-center justify-center shadow-md">
                        0
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
