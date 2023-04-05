import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/layout";

import "@/styles/dashboard.css";
import "@/styles/common_1.css";
import "@/styles/sidebar.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
