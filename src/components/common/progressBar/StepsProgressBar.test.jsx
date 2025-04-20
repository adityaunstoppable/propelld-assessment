import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StepsProgressBar from './StepsProgressBar';

describe('StepsProgressBar Component', () => {
  test('renders the correct number of steps', () => {
    render(<StepsProgressBar steps={['Step 1', 'Step 2', 'Step 3']} activeStep={2} />);
    const steps = screen.getAllByText(/Step/);
    expect(steps.length).toBe(3);
  });

  test('correctly highlights the active step', () => {
    render(<StepsProgressBar steps={['Step 1', 'Step 2', 'Step 3']} activeStep={2} />);
    const activeStep = screen.getByText('2');
    expect(activeStep).toHaveClass('bg-green-800');
  });
});
