import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import useStepsComponent from './useStepsComponent';

jest.mock('../dashboard/applicationForm/steps/Step1', () => jest.fn(() => <div>Step 1</div>));
jest.mock('../dashboard/applicationForm/steps/Step2', () => jest.fn(() => <div>Step 2</div>));
jest.mock('../dashboard/applicationForm/steps/Step3', () => jest.fn(() => <div>Step 3</div>));

describe('useStepsComponent', () => {
  it('should render Step1 when currentStep is 1', () => {
    const { container } = render(useStepsComponent(1));
    expect(container.textContent).toBe('Step 1');
  });

  it('should render Step2 when currentStep is 2', () => {
    const { container } = render(useStepsComponent(2));
    expect(container.textContent).toBe('Step 2');
  });
});
