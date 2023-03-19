import "../styles/globals.css";
import { Roboto } from "next/font/google";

const poppins = Roboto({ subsets: ["latin"], weight: ["400"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
