import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/layout";

import "@/styles/scss/dashboard.scss";
import "@/styles/scss/common_1.scss";
import "@/styles/scss/sidebar.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
