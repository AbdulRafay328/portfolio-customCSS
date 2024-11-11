import Image from "next/image";
import Link from "next/link";

function Contactme() {
  return (
    <div className="contact-container">
      <div className="contact-text-large">rafayone23@gmail.com</div>
      <div className="contact-text">+92 3162149602</div>
      <div className="contact-platform-text">
        You may also find me on these platforms
      </div>
      <div className="contact-socials">
        <Link href="https://github.com/AbdulRafay328">
          <Image
            className="contact-icon"
            src="/images/github-icon.png"
            alt="GitHub Icon"
            width={40}
            height={40}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/abdul-rafay-979143308/">
          <Image
            className="contact-icon"
            src="/images/linkedin-square-icon.png"
            alt="LinkedIn Icon"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
}

export default Contactme;
