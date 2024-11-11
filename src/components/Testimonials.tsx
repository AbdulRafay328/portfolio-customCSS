import { motion } from "framer-motion";
import Image from "next/image";

function Testimonials() {
  const cardVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVarient}
        className="testimonial-card"
      >
        <Image
          className="profile-image"
          src="/images/user-profile-icon.png"
          alt="User profile"
          width={80}
          height={80}
        />
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nihil nemo ipsa quo impedit sunt aperiam quae hic deleniti temporibus?
        </p>
        <div className="testimonial-info">
          <h1 className="testimonial-name">John Doe</h1>
          <div className="testimonial-role">Freelancer</div>
        </div>
      </motion.div>
    </>
  );
}

export default Testimonials;
