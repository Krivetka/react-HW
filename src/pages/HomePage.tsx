import React from 'react';
import figure from "./../assets/figure.png"
import trustpilot from "../assets/trustpilot.png"
import bunner from "../assets/home-bunner.png"

const HomePage: React.FC = () => {
    return (
        <div className="w-full h-full flex justify-center items-center px-6 md:px-16 py-10 relative">
            <img
                src={figure}
                alt="figure"
                className="absolute top-0 right-0 w-full z-[-1] dark:opacity-5"
            />
            <div className="flex flex-col items-start gap-6">
                <h2 className="text-4xl md:text-6xl font-light text-gray-900 dark:text-gray-100 leading-tight tracking-wide">
                    Beautiful food & <br/> takeaway,
                    <span className="text-teal-500"> delivered</span> <br/> to your door.
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg leading-relaxed max-w-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                </p>
                <button
                    aria-label="Place an order"
                    className="w-48 h-14 mt-6 bg-teal-500 text-white rounded-lg text-base font-medium hover:bg-teal-700 transition-colors duration-200"
                    type="button"
                >
                    Place an Order
                </button>
                <img
                    src={trustpilot}
                    alt="trustpilot"
                    className="w-28 mt-4 dark:opacity-0"
                />
                <p className="text-gray-900 dark:text-gray-100 text-sm font-normal">
                    <span className="text-teal-500">4.8 out of 5</span> based on 2000+ reviews
                </p>
            </div>
            <img
                src={bunner}
                alt="banner"
                className="w-5/12 max-w-lg"
            />
        </div>
    );
};

export default HomePage;
