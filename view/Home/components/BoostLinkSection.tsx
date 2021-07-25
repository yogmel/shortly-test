import React from "react";
import { Button, ButtonType } from "view/shared";
import boostLinkStyles from "./../styles/BoostLinkSection.module.scss";

export default function BoostLinkSection() {
  return (
    <section className={boostLinkStyles.section}>
      <h2 className="inverted">Boost your links today</h2>
      <Button type={ButtonType.Primary} className={boostLinkStyles.button}>
        Get Started
      </Button>
    </section>
  );
}
