import { render } from '@testing-library/react';

import VpcSubnetsFeatureShell from './VpcSubnetsFeatureShell';

describe('VpcSubnetsFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VpcSubnetsFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
