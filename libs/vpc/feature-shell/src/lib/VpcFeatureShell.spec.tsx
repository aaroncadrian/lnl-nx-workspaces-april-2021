import { render } from '@testing-library/react';

import VpcFeatureShell from './VpcFeatureShell';

describe('VpcFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VpcFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
