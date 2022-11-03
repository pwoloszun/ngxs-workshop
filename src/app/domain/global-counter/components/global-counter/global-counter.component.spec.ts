import { NgxsModule } from '@ngxs/store';
import { render, screen } from '@testing-library/angular'
import userEvent from '@testing-library/user-event';

import { CustomMaterialModule } from '@ui/custom-material';

import { GlobalCounterState } from '../../state/global-counter';
import { GlobalCounterComponent } from './global-counter.component';

describe('GlobalCounterComponent', () => {

  it(`should be able to increment counter value`, async () => {
    await renderComponent();

    await screen.findByText(/Value: 200/i);

    const incrementBtn = await screen.findByRole('button', { name: /Increment/i });
    userEvent.click(incrementBtn);

    await screen.findByText(/Value: 205$/i);
  });

});

async function renderComponent() {
  await render(GlobalCounterComponent, {
    imports: [
      NgxsModule.forRoot([], { developmentMode: true }),
      NgxsModule.forFeature([GlobalCounterState]),
      CustomMaterialModule,
    ],
  });
}
