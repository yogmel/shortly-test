import Link from "next/link";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import Logo from "./../assets/images/logo.svg";
import navbarStyles from "./styles/Navbar.module.scss";
import layoutStyles from "./../styles/Layout.module.scss";
import { Button, ButtonType } from "./Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);

  return (
    <section className={`${layoutStyles.grid} ${navbarStyles.navbar}`}>
      <Link href="/">
        <a className={navbarStyles.logo}>
          <Image src={Logo} alt="Shortly logo" />
        </a>
      </Link>

      <button
        className={navbarStyles.mobileNavButton}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={
          mobileMenuOpen ? navbarStyles.navMenuActive : navbarStyles.navMenu
        }
      >
        <nav className={navbarStyles.navLinks}>
          <Link href="/">
            <a>Features</a>
          </Link>
          <Link href="/">
            <a>Pricing</a>
          </Link>
          <Link href="/">
            <a>Resources</a>
          </Link>
        </nav>

        <hr className={navbarStyles.divider} />

        <div className={navbarStyles.loginButtons}>
          <Button type={ButtonType.Link}>Login</Button>
          <Button type={ButtonType.Primary}>Sign up</Button>
        </div>
      </div>
    </section>
  );
}
