import { render } from '@testing-library/react';

import SharedSecurityGroupsFeatureShell from './SharedSecurityGroupsFeatureShell';

describe('SharedSecurityGroupsFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedSecurityGroupsFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
