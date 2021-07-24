import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "./../assets/images/logo.svg";
import FacebookIcon from "./../assets/images/icon-facebook.svg";
import TwitterIcon from "./../assets/images/icon-twitter.svg";
import PinterestIcon from "./../assets/images/icon-pinterest.svg";
import InstagramIcon from "./../assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer>
      <section>
        <Image src={Logo} alt="Shortly logo" />

        <nav>
          <h4>Features</h4>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <ul>
            <li>
              <Link href="/">
                <Image src={FacebookIcon} alt="Facebook icon" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={TwitterIcon} alt="Twitter icon" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={PinterestIcon} alt="Pinterest icon" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={InstagramIcon} alt="Instagram icon" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
