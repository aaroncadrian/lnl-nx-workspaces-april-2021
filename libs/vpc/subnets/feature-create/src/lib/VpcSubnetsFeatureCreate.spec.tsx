import { render } from '@testing-library/react';

import CreateSubnetPage from './CreateSubnetPage';

describe('VpcSubnetsFeatureCreate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateSubnetPage />);
    expect(baseElement).toBeTruthy();
  });
});
