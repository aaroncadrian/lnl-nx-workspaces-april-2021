import { render } from '@testing-library/react';

import VpcFeatureDashboard from './VpcFeatureDashboard';

describe('VpcFeatureDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VpcFeatureDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
