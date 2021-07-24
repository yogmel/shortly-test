import React from "react";
import { Button, ButtonType } from "view/shared";
import shortenFormStyles from "../styles/ShortenForm.module.scss";
import layoutStyles from "view/shared/styles/Layout.module.scss";

export default function ShortenForm() {
  return (
    <section className={layoutStyles.grid}>
      <form className={shortenFormStyles.form}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          className={shortenFormStyles.input}
        />
        <Button
          type={ButtonType.Secondary}
          className={shortenFormStyles.submit}
        >
          Shorten it!
        </Button>
      </form>
    </section>
  );
}
