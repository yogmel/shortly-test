import React from "react";
import Head from "next/head";
import { Home } from "../view";

export default function App() {
  return (
    <>
      <Head>
        <title>Shortly - Check your link's performance</title>
      </Head>
      <Home />
    </>
  );
}
