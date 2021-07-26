import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styles from "./../styles/ShortenFormEntry.module.scss";
import layoutStyles from "view/shared/styles/Layout.module.scss";
import ShortenFormEntry from "./ShortenFormEntry";
import { ShortenlinkViewModel } from "viewmodel";

interface ShortenFormLink {
  viewModel: ShortenlinkViewModel;
}

function ShortenFormEntries(props: ShortenFormLink) {
  const {
    viewModel: { shortlinks, loadCachedData },
  } = props;

  useEffect(() => {
    loadCachedData();
  }, [loadCachedData]);

  return (
    <section className={styles.section}>
      <div className={layoutStyles.grid}>
        {shortlinks.map((link) => (
          <ShortenFormEntry key={link.code} link={link} />
        ))}
      </div>
    </section>
  );
}

export default observer(ShortenFormEntries);
