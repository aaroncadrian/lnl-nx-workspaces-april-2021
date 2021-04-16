import { render } from '@testing-library/react';

import ListSubnetsPage from './ListSubnetsPage';

describe('VpcSubnetsFeatureList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListSubnetsPage />);
    expect(baseElement).toBeTruthy();
  });
});
