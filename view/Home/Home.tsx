import { observer } from "mobx-react";
import React, { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { ShortenLinkViewModel } from "viewmodel";
import { Navbar } from "../shared/components";
import {
  AdvancedSection,
  BoostLinkSection,
  Header,
  ShortenForm,
  ShortenFormEntry,
} from "./components";

const Footer = dynamic(() => import("./../shared/components/Footer"), {
  ssr: false,
});

function Home() {
  const shortenLinkViewModel = useMemo(() => new ShortenLinkViewModel(), []);

  return (
    <>
      <Navbar />

      <Header />
      <main>
        <ShortenForm viewModel={shortenLinkViewModel} />
        <ShortenFormEntry shortlinks={shortenLinkViewModel.shortlinks} />
        <AdvancedSection />
        <BoostLinkSection />
      </main>

      <Footer />
    </>
  );
}

export default observer(Home);
