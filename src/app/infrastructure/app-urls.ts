export const mainAppPaths = {
  fundamentals: 'fundamentals',
  designPrinciples: 'design-principles',
  myTube: 'my-tube',
  myMessenger: 'my-messenger',
};

interface ILinkUrl {
  linkUrl: string;
}

export type WithLink<T> = T & ILinkUrl;

export function getVideoUrl(id: number): string {
  return `/${mainAppPaths.myTube}/watch/${id}`;
}


