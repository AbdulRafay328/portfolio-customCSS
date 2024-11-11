import { motion } from "framer-motion";
import Image from "next/image";

function Intro() {
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
      className="intro-container"
    >
      <motion.div variants={leftVarient} className="left">
        <div>
          <h1 className="left-heading">
            Hi I&apos;m Rafay👋
          </h1>
          <p className="left-paragraph">
            I&apos;m a frontend developer with a focus on creating and
            occasionally designing exceptional digital experiences that are
            fast, accessible, visually appealing, and responsive. Even though I
            have been creating web applications for over 2 years, I still love
            it as if it was something new.
          </p>
        </div>

        <div className="info">
          <Image
            className="invert"
            width={25}
            height={20}
            src="/images/location.png"
            alt="location logo"
          />
          Karachi, Pakistan
        </div>
        <div className="info">
          <div className="status-indicator"></div>
          Available for new projects
        </div>
      </motion.div>

      <motion.div
        variants={rightVarient}
        className="right"
      >
        <Image
          className="profile-image"
          width={300}
          height={300}
          src="/images/profile.jpeg"
          alt="profile image"
        />
      </motion.div>
    </motion.div>
  );
}

export default Intro;
