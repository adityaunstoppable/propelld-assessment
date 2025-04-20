import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SuccessButton from './SuccessButton';
import '@testing-library/jest-dom';

test('renders SuccessButton with label', () => {
  render(<SuccessButton label="Submit" actionHandler={() => {}} />);
  const buttonElement = screen.getByText(/Submit/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls actionHandler on click', () => {
  const handleClick = jest.fn();
  render(<SuccessButton label="Submit" actionHandler={handleClick} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
