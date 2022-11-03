import { IMenuSection } from './menu-section.type';

export const myTubeSection: IMenuSection = {
  title: 'MyTube',
  routes: [
    { text: 'Featured Videos', url: '/my-tube/featured' },
  ],
  icon: {
    value: 'devices'
  },
};
