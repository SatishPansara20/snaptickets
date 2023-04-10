import Head from "next/head";

import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

import Home from "./screen/home";
// import Dashboard from "./screen/dashboard/index";

export default function Page() {
  return (
    <>
      <Head>
        <title>SnapTickets</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Dashboard /> */}
      <Home />
    </>
  );
}
