import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ImageProps {
  src: string;
  alt: string;
  address: string;
  heading: string;
}

function Projectcard({ src, alt, address, heading }: ImageProps) {
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="project-card-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="image-container" variants={leftVariant}>
        <Image
          className="project-image"
          width={500}
          height={400}
          src={src}
          alt={alt}
        />
      </motion.div>

      <motion.div className="content-container" variants={rightVariant}>
        <h1 className="heading">{heading}</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          assumenda ipsum, harum exercitationem architecto hic.
        </p>

        <div className="skill-container">
          <div className="skill-item">React</div>
          <div className="skill-item">Tailwind CSS</div>
          <div className="skill-item">Next.js</div>
          <div className="skill-item">TypeScript</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">Firebase</div>
        </div>

        <div className="link-container">
          <Link href={address}>
            <Image
              className="link-icon"
              src="/images/link.png"
              alt="link"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Projectcard;
