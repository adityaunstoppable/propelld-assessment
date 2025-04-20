import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MultiInputField from './MultiInputFields';


test('renders multiple input fields', () => {
  render(<MultiInputField totalFields={4} onChange={() => {}} />);
  const inputs = screen.getAllByRole('textbox');
  expect(inputs.length).toBe(4);
});

test('allows entering number in input', () => {
  render(<MultiInputField totalFields={4} onChange={() => {}} />);
  const inputs = screen.getAllByRole('textbox');
  fireEvent.change(inputs[0], { target: { value: '1' } });
  expect(inputs[0].value).toBe('1');
});