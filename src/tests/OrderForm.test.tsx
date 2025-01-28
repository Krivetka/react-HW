import {fireEvent, render, screen} from '@testing-library/react';
import OrderForm from '../components/OrderForm.tsx';

test('renders the form and updates input values', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<OrderForm />);

    const streetInput = screen.getByPlaceholderText('Enter street') as HTMLInputElement;
    const houseInput = screen.getByPlaceholderText('Enter house') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /order/i });

    fireEvent.change(streetInput, { target: { value: 'Main Street' } });
    fireEvent.change(houseInput, { target: { value: '42' } });
    fireEvent.click(submitButton);

    expect(alertMock).toHaveBeenCalledWith('Order placed for Street: Main Street, House: 42');

    alertMock.mockRestore();
});