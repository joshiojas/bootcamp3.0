import "@/styles/globals.css";
import type { AppProps } from "next/app";
require("bootstrap/dist/css/bootstrap.min.css");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      /> */}
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
