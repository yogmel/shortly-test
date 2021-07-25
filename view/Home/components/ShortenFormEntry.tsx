import { observer } from "mobx-react";
import { Shortlink } from "model";
import React, { useCallback, useState } from "react";
import { Button, ButtonType } from "view/shared";
import styles from "./../styles/ShortenFormEntry.module.scss";

interface ShortenFormEntryProps {
  link: Shortlink;
}

function ShortenFormEntry(props: ShortenFormEntryProps) {
  const { link } = props;

  const [copyActive, setCopyActive] = useState(false);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(link.shortUrl);
    setCopyActive(true);
    setTimeout(() => {
      setCopyActive(false);
    }, 10000);
  }, [link.shortUrl]);

  return (
    <div className={styles.card}>
      <p className={styles.originalUrl}>{link?.originalUrl}</p>
      <div className={styles.shortlinkContainer}>
        <p className={styles.shortlink}>{link?.shortUrl}</p>
        <Button
          type={ButtonType.Secondary}
          className={styles.button}
          onClick={copyToClipboard}
          active={copyActive}
        >
          {copyActive ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
}

export default observer(ShortenFormEntry);
