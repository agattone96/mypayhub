export const initAnalytics = () => {
  if (typeof window !== 'undefined') {
    window.gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID', {
      page_path: window.location.pathname,
    });
  }
};