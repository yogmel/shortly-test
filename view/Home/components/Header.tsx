import Image from "next/image";
import HeaderImage from "./../../shared/assets/images/illustration-working.svg";
import headerStyles from "../styles/Header.module.scss";
import layoutStyles from "./../../shared/styles/Layout.module.scss";
import { Button, ButtonType } from "../../shared";
import React from "react";

export default function Header() {
  return (
    <header className={`${layoutStyles.grid} ${headerStyles.header}`}>
      <div className={headerStyles.image}>
        <Image src={HeaderImage} alt="Shortly logo" />
      </div>

      <div className={headerStyles.description}>
        <h1 className={headerStyles.title}>More than just shorter links</h1>
        <p className={headerStyles.subtitle}>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button type={ButtonType.Primary} className={headerStyles.button}>
          Get Started
        </Button>
      </div>
    </header>
  );
}
