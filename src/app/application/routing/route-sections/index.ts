import { fundamentalsSection } from './fundamentals-section';
import { designPrinciplesSection } from './design-principles-section';
import { myTubeSection } from './my-tube-section';
import { myMessengerSection } from './my-messenger-section';

import { advancedSection } from './advanced-section';
import { extrasSection } from './extras-section';
import { streamsSection } from './streams-section';
import { testingSection } from './testing-section';

export type { IMenuSection } from './menu-section.type';

export const mainMenuSections = [
  fundamentalsSection,
  designPrinciplesSection,
  myTubeSection,
  // myMessengerSection,
  // advancedSection,
  // extrasSection,
  // testingSection,
  // streamsSection,
];
