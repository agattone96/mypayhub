export const initHotjar = () => {
  if (typeof window !== 'undefined') {
    window.hj =
      window.hj ||
      function () {
        (window.hj.q = window.hj.q || []).push(arguments);
      };
    hj('init', YOUR_HOTJAR_ID);
  }
};