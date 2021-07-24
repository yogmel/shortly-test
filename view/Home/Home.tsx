import React from "react";
import { Navbar, Footer } from "../shared/components";
import {
  AdvancedSection,
  BoostLinkSection,
  Header,
  ShortenForm,
} from "./components";

export default function Home() {
  return (
    <>
      <Navbar />

      <Header />
      <main>
        <ShortenForm />
        <AdvancedSection />
        <BoostLinkSection />
      </main>

      <Footer />
    </>
  );
}
