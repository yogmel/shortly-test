import { observer } from "mobx-react";
import { Shortlink } from "model";
import React from "react";
import styles from "./../styles/ShortenFormEntry.module.scss";
import layoutStyles from "view/shared/styles/Layout.module.scss";
import ShortenFormEntry from "./ShortenFormEntry";

interface ShortenFormLink {
  shortlinks: Shortlink[];
}

function ShortenFormEntries(props: ShortenFormLink) {
  const { shortlinks } = props;

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
