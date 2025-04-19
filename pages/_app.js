import Layout from "@/components/Layout";
import LoadExternalScripts from "@/components/LoadExternalScripts";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";



function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const initPlugins = () => {
    if (typeof window !== "undefined" && window.$) {
      if (typeof window.$.fn.owlCarousel === "function") {
        const $carousel = window.$(".owl-carousel");
        if ($carousel.length > 0) {
          $carousel.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
          });
          console.log("✅ OwlCarousel initialized.");
        }
      }

      if (typeof window.$.fn.counterUp === "function") {
        window.$('.counter').counterUp({
          delay: 10,
          time: 1000
        });
        console.log("✅ CounterUp initialized.");
      }
    }
  };

  useEffect(() => {
    if (router.pathname === "/") {
      setTimeout(() => {
        initPlugins();
      }, 200); // کمی صبر تا DOM کامل بشه
    }

    router.events.on("routeChangeComplete", (url) => {
      if (url === "/") {
        setTimeout(() => {
          initPlugins();
        }, 200);
      }
    });

    return () => {
      router.events.off("routeChangeComplete", initPlugins);
    };
  }, [router]);


  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          title="Zafaraniyehtvto.ir"
        />
      </Head>
      <LoadExternalScripts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
