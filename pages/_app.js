import "../styles/globals.css";
import { Roboto } from "next/font/google";
import Script from "next/script";

const poppins = Roboto({ subsets: ["latin"], weight: ["400"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>

      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
