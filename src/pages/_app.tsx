import LayoutProvider from "@/layout/LayoutProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/bundle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </>
  );
}
