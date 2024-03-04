import Footer from "@/ui/Footer";
import Nav from "@/ui/nav";
import { Head, Html, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Nav />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
