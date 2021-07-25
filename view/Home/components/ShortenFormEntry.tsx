import { observer } from "mobx-react";
import { Shortlink } from "model";
import React from "react";
import { Button, ButtonType } from "view/shared";
import styles from "./../styles/ShortenFormEntry.module.scss";
import layoutStyles from "view/shared/styles/Layout.module.scss";

interface ShortenFormLink {
  shortlinks: Shortlink[];
}

function ShortenFormEntry(props: ShortenFormLink) {
  const { shortlinks } = props;

  return (
    <section className={styles.section}>
      <div className={layoutStyles.grid}>
        {shortlinks.map((link) => (
          <div key={link.code} className={styles.card}>
            <p className={styles.originalUrl}>{link.originalUrl}</p>
            <div className={styles.shortlinkContainer}>
              <p className={styles.shortlink}>{link.shortUrl}</p>
              <Button type={ButtonType.Secondary} className={styles.button}>
                Copy
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default observer(ShortenFormEntry);
