import Head from "next/head";

import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

import common from "@/styles/common.module.css";
import Home from "./screen/home";

export default function Page() {
  return (
    <>
      <Head>
        <title>SnapTickets</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
