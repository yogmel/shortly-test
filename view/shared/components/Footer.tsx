import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "view/shared/assets/images/logo.svg";
import footerStyles from "./styles/Footer.module.scss";
import layoutStyles from "view/shared/styles/Layout.module.scss";

import { socialData, navData } from "../data";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <section className={`${footerStyles.container} ${layoutStyles.grid}`}>
        <div className={footerStyles.logo}>
          <Image src={Logo} alt="Shortly logo" />
        </div>

        <nav className={footerStyles.nav}>
          {navData?.map((data) => (
            <div className={footerStyles.navLinksContainer}>
              <h4 className="inverted">{data.title}</h4>
              <ul className={footerStyles.navLinks}>
                {data.links.map((link) => (
                  <li>
                    <Link href={link.url}>
                      <a>{link.display}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className={footerStyles.socialLinksContainer}>
          <ul className={footerStyles.socialLinks}>
            {socialData?.map((data) => (
              <li>
                <Link href={data.url}>
                  <Image src={data.icon.src} alt={data.icon.alt} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
}
