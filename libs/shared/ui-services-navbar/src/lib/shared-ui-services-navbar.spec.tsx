import { render } from '@testing-library/react';

import SharedUiServicesNavbar from './shared-ui-services-navbar';

describe('SharedUiServicesNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiServicesNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
