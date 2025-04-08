import LoadExternalScripts from "@/components/LoadExternalScripts";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <LoadExternalScripts />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
