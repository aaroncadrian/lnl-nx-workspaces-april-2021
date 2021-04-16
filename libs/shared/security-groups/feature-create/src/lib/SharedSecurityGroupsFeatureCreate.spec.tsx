import { render } from '@testing-library/react';

import SharedSecurityGroupsFeatureCreate from './CreateSecurityGroupPage';

describe('SharedSecurityGroupsFeatureCreate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedSecurityGroupsFeatureCreate />);
    expect(baseElement).toBeTruthy();
  });
});
