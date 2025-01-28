import React from 'react';
import OrderForm from "../components/OrderForm.tsx";
import OrderList from "../components/OrderList.tsx";

const OrderPage: React.FC = () => {

    return (
        <div
            className="flex flex-col gap-4 justify-center items-center pb-40 pt-8 transition-colors duration-300">
            <div className="text-center text-teal-500 dark:text-teal-400 text-5xl font-normal mb-4">
                Finish your order
            </div>
            <OrderList/>
            <OrderForm/>
        </div>
    );
};

export default OrderPage;
