import { render } from '@testing-library/react';

import SharedSecurityGroupsFeatureList from './ListSecurityGroupsPage';

describe('SharedSecurityGroupsFeatureList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedSecurityGroupsFeatureList />);
    expect(baseElement).toBeTruthy();
  });
});
