import type { AppProps } from "next/app";

import { GlobalStyles } from "../../styles/globals";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}
export default MyApp;
