import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput Component', () => {
  test('renders TextInput with label', () => {
    render(<TextInput label="Name" value="" changeHandler={() => {}} />);
    const labelElement = screen.getByText(/Name/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('calls changeHandler when typing', () => {
    const handleChange = jest.fn();
    render(<TextInput label="Name" value="" changeHandler={handleChange} />);
    const input = screen.getByPlaceholderText(/Enter/i);
    fireEvent.change(input, { target: { value: 'John' } });
    expect(handleChange).toHaveBeenCalled();
  });
});