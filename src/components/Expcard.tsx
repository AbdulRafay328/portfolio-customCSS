import { motion } from "framer-motion";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  head: string;
}

function Card({ src, alt, head }: ImageProps) {
  const cardVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVarient}
      className="card-container"
    >
      <div className="card-image-container">
        <Image
          className="card-image"
          width={100}
          height={100}
          src={src}
          alt={alt}
        />
      </div>

      <div className="card-content">
        <h1 className="card-heading">{head}</h1>
        <ul className="card-list">
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </div>

      <div className="card-date">Nov 2021 - Present</div>
    </motion.div>
  );
}

export default Card;
