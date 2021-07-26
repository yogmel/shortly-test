import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Logo from "view/shared/assets/images/logo.svg";
import navbarStyles from "./styles/Navbar.module.scss";
import layoutStyles from "view/shared/styles/Layout.module.scss";
import { Button, ButtonType } from "./Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width } = window;
      if (width > 800) {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

      <button className={navbarStyles.mobileButton} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={mobileMenuOpen ? navbarStyles.menuActive : navbarStyles.menu}
      >
        <nav className={navbarStyles.links}>
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

        <div className={navbarStyles.loginContainer}>
          <Button type={ButtonType.Link}>Login</Button>
          <Button type={ButtonType.Primary}>Sign up</Button>
        </div>
      </div>
    </section>
  );
}
