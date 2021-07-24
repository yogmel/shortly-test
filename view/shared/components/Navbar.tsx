import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "./../assets/images/logo.svg";

export default function Navbar() {
  return (
    <section>
      <Link href="/">
        <Image src={Logo} alt="Shortly logo" />
      </Link>

      <nav>
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

      <div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </section>
  );
}
