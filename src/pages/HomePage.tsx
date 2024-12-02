import React from 'react';


const HomePage: React.FC = () => {

    return (
        <div className="w-full h-full p-8 flex flex-col items-center space-y-8">
            <div className="relative w-full h-[480px] flex items-center justify-center bg-teal-400 rounded-md">
                <div className="absolute w-52 h-56 left-[-133px] top-[-143px] opacity-20 bg-teal-400"></div>
                <div className="absolute top-[-10%] text-center text-white text-base leading-tight w-full">
                    <div className="w-48 h-14 bg-teal-400 rounded-md mx-auto">
                        <div className="flex justify-center items-center w-full h-full">Place an Order</div>
                    </div>
                </div>
            </div>

            <div className="w-full text-center text-slate-500 text-lg leading-normal tracking-tight">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500.
            </div>

            <div className="flex justify-between w-full max-w-[500px] mx-auto text-teal-400 text-base leading-tight">
                <div>4.8 out of 5</div>
                <div className="text-zinc-950">based on 2000+ reviews</div>
            </div>

            <div className="text-center w-full">
                <span className="text-zinc-950 text-6xl leading-10 tracking-widest">Beautiful food & takeaway, </span>
                <span className="text-teal-400 text-6xl leading-10 tracking-widest">delivered</span>
                <span className="text-zinc-950 text-6xl leading-10 tracking-widest"> to your door.</span>
            </div>

            <div className="flex justify-center w-full">
                <img className="w-96 h-96" src="src/assets/home-bunner.png" alt="bunner" />
            </div>
        </div>
    );




};

export default HomePage;
