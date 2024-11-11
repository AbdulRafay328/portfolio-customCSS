import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  const leftVarient = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const rightVarient = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="container"
    >
      <motion.div
        variants={leftVarient}
        className="leftvarient"
      >
        <Image
          className="image"
          width={220}
          height={300}
          src="/images/Aboutme.png"
          alt="About Me"
        />
      </motion.div>
      <motion.div
        variants={rightVarient}
        className="md:w-1/2 xs:pt-5 xs:px-4 space-y-8"
      >
        <div className=" head font-medium text-xl">
          Curious about me? Here you have it:
        </div>
        <div>
          I&apos;m a passionate self-proclaimed developer who specializes in
          frontend development with Next.js & Node.js. I am very enthusiastic
          about bringing the technical and visual aspects of digital products to
          life. User experience, pixel-perfect design, and writing clear,
          readable, highly performant code matter to me.
        </div>
        <div>
          I began my journey as a web developer in 2022, and since then,
          I&apos;ve continued to grow and evolve as a developer, taking on new
          challenges and learning the latest technologies along the way. Now, in
          my early twenties, 2 years after starting my web development journey,
          I&apos;m building cutting-edge web applications using modern
          technologies such as Next.js, TypeScript, Node.js, Tailwind CSS,
          figma, and much more.
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;