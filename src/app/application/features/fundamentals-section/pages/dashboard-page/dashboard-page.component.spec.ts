import { render, screen } from '@testing-library/angular'

import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {

  it(`should have as title 'ngxs-workshop'`, async () => {
    await render(DashboardPageComponent);
    const title = await screen.findByText(/ngxs-workshop/i);
    expect(title).toBeInTheDocument();
  });

});
