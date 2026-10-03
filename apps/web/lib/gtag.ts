export const GA_TRACKING_ID = 'G-041WHPFK4R';

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, params);
  }
};
