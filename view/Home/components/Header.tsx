import Image from "next/image";
import HeaderImage from "./../../shared/assets/images/illustration-working.svg";

export default function Header() {
  return (
    <header>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>

      <Image src={HeaderImage} alt="Shortly logo" />
    </header>
  );
}
