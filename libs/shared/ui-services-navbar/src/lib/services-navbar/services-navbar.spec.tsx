import { render } from '@testing-library/react';

import ServicesNavbar from './services-navbar';

describe('ServicesNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServicesNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
