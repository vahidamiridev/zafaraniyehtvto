import Script from "next/script";

export default function LoadExternalScripts() {
  return (
    <>
      <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/js/jquery-migrate-3.0.0.js" strategy="afterInteractive" />
      <Script src="/js/popper.min.js" strategy="afterInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/js/modernizr.min.js" strategy="afterInteractive" />
      <Script src="/js/scrollup.js" strategy="afterInteractive" />
      <Script src="/js/jquery-fancybox.min.js" strategy="afterInteractive" />
      <Script src="/js/cubeportfolio.min.js" strategy="afterInteractive" />
      <Script src="/js/slicknav.min.js" strategy="afterInteractive" />
      <Script src="/js/waypoints.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
      <Script src="/js/slicknav.min.js" strategy="afterInteractive" />
      <Script src="/js/owl-carousel.min.js"strategy="afterInteractive"/>
      <Script src="/js/easing.js" strategy="afterInteractive" />
      <Script src="/js/active.js" strategy="afterInteractive" />
      <Script src="/js/theme-option.js" strategy="afterInteractive" />
      <Script src="/js/magnific-popup.min.js" strategy="afterInteractive" />
    </>
  );
}
