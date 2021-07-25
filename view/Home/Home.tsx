import { observer } from "mobx-react";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { ShortenlinkViewModel } from "viewmodel";
import { Navbar } from "../shared/components";
import {
  AdvancedSection,
  BoostLinkSection,
  Header,
  ShortenForm,
  ShortenFormEntries,
} from "./components";

const Footer = dynamic(() => import("./../shared/components/Footer"), {
  ssr: false,
});

function Home() {
  const shortenLinkViewModel = useMemo(() => new ShortenlinkViewModel(), []);

  return (
    <>
      <Navbar />

      <Header />
      <main>
        <ShortenForm viewModel={shortenLinkViewModel} />
        <ShortenFormEntries viewModel={shortenLinkViewModel} />
        <AdvancedSection />
        <BoostLinkSection />
      </main>

      <Footer />
    </>
  );
}

export default observer(Home);
