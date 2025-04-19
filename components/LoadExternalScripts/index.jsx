import { useEffect } from "react";
import { useRouter } from "next/router";

export default function LoadExternalScripts() {
  const router = useRouter();

  const scripts = [
    { src: "/js/jquery.min.js", global: "jQuery", strategy: "beforeInteractive" },
    { src: "/js/jquery-migrate-3.0.0.js" },
    { src: "/js/popper.min.js" },
    { src: "/js/bootstrap.min.js" },
    { src: "/js/owl-carousel.min.js", onload: "initOwl" },
    { src: "/js/jquery.counterup.min.js", onload: "initCounter" },
    { src: "/js/waypoints.min.js" },
    { src: "/js/scrollup.js" },
    { src: "/js/jquery-fancybox.min.js" },
    { src: "/js/modernizr.min.js" },
    { src: "/js/slicknav.min.js" },
    { src: "/js/cubeportfolio.min.js" },
    { src: "/js/easing.js" },
    { src: "/js/active.js" },
    { src: "/js/theme-option.js" },
    { src: "/js/magnific-popup.min.js" },
  ];

  // اضافه کردن دستی اسکریپت‌ها
  const loadScripts = () => {
    scripts.forEach(({ src }) => {
      const found = document.querySelector(`script[src="${src}"]`);
      if (found) return; // دوباره لود نشه

      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.defer = true;
      document.body.appendChild(script);
    });
  };

  // اجرای مجدد پلاگین‌ها بعد از تغییر مسیر
  const initPlugins = () => {
    setTimeout(() => {
      if (window.$) {
        // owlCarousel
        const $carousels = window.$(".owl-carousel");
        if ($carousels.length > 0 && typeof window.$.fn.owlCarousel === "function") {
          $carousels.owlCarousel({ items: 1, loop: true, autoplay: true });
          console.log("✅ OwlCarousel initialized.");
        }

        // counterUp
        const $counters = window.$(".counter");
        if ($counters.length > 0 && typeof window.$.fn.counterUp === "function") {
          $counters.counterUp({ delay: 10, time: 1000 });
          console.log("✅ CounterUp initialized.");
        }
      }
    }, 800); // بعد از رندر شدن کامل DOM
  };

  useEffect(() => {
    loadScripts();    // اولین بار
    initPlugins();

    router.events.on("routeChangeComplete", initPlugins);
    return () => router.events.off("routeChangeComplete", initPlugins);
  }, []);

  return null; // چیزی در UI رندر نمی‌کنیم
}

















































// import Script from "next/script";

// export default function LoadExternalScripts() {
//   return (
//     <>
//       <Script src="/js/jquery.min.js" strategy="beforeInteractive"  />
//       <Script src="/js/jquery-migrate-3.0.0.js" strategy="afterInteractive"  />
//       <Script src="/js/popper.min.js" strategy="afterInteractive"  />
//       <Script src="/js/bootstrap.min.js" strategy="afterInteractive"  />
//       <Script src="/js/modernizr.min.js" strategy="afterInteractive"  />
//       <Script src="/js/scrollup.js" strategy="afterInteractive"  />
//       <Script src="/js/jquery-fancybox.min.js" strategy="afterInteractive"  />
//       <Script src="/js/cubeportfolio.min.js" strategy="afterInteractive"  />
//       <Script src="/js/slicknav.min.js" strategy="afterInteractive"  />
//       <Script src="/js/waypoints.min.js" strategy="afterInteractive"  />
//       <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive"  />
//       <Script src="/js/slicknav.min.js" strategy="afterInteractive"  />
//       <Script src="/js/owl-carousel.min.js" strategy="afterInteractive"  />
//       <Script src="/js/easing.js" strategy="afterInteractive"  />
//       <Script src="/js/active.js" strategy="afterInteractive"  />
//       <Script src="/js/theme-option.js" strategy="afterInteractive"  />
//       <Script src="/js/magnific-popup.min.js" strategy="afterInteractive"  />
//     </>
//   );
// }
