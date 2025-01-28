import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from 'react-redux';
import OrderList from '../components/OrderList';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('OrderList Component', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
        jest.clearAllMocks();
    });

    test('renders empty cart message when no items are present', () => {
        (useSelector as unknown as jest.Mock).mockReturnValue([]);

        render(<OrderList />);

        expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    });

    test('renders items in the cart', () => {
        (useSelector as unknown as jest.Mock).mockReturnValue([
            { id: '1', meal: 'Pizza', price: 12.99, quantity: 1, img: 'pizza.jpg' },
            { id: '2', meal: 'Burger', price: 8.99, quantity: 2, img: 'burger.jpg' },
        ]);

        render(<OrderList />);

        expect(screen.getByText('Pizza')).toBeInTheDocument();
        expect(screen.getByText('Burger')).toBeInTheDocument();
    });

    test('updates quantity of an item', () => {
        (useSelector as unknown as jest.Mock).mockReturnValue([
            { id: '1', meal: 'Pizza', price: 12.99, quantity: 1, img: 'pizza.jpg' },
        ]);

        render(<OrderList />);

        const quantityInput = screen.getByRole('spinbutton') as HTMLInputElement;
        fireEvent.change(quantityInput, { target: { value: '3' } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'cart/updateQuantity',
            payload: { id: '1', quantity: 3 },
        });
    });

    test('removes an item from the cart', () => {
        (useSelector as unknown as jest.Mock).mockReturnValue([
            { id: '1', meal: 'Pizza', price: 12.99, quantity: 1, img: 'pizza.jpg' },
        ]);

        render(<OrderList />);

        const removeButton = screen.getByRole('button', { name: 'X' });
        fireEvent.click(removeButton);

        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'cart/removeItem',
            payload: '1',
        });
    });
});
