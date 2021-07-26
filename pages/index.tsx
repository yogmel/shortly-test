import React from "react";
import Head from "next/head";
import { Home } from "../view";

export default function App() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Shortly - Check your link's performance</title>
      </Head>
      <Home />
    </>
  );
}
