import React from 'react';
import OrderForm from "../components/orderForm.tsx";

const OrderPage: React.FC = () => {

    return (
        <div className="flex flex-col gap-4 justify-center items-center pb-40 pt-8">
            <div className="text-center text-teal-500 text-5xl font-normal mb-4">
                Finish your order
            </div>

            <OrderForm/>
        </div>
    );
};

export default OrderPage;
