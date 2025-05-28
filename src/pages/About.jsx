import AnimatedButton from "../Components/AnimatedButton";
import { motion } from "framer-motion";
import bgImage from "/bg.png";

export default function About() {
  return (
    <>
      {/* Background gradient or blur effect */}
      <div
        className="background-animated"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="background-dim-overlay"></div>

      <motion.main
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Soft shadow box container */}
        <section className="shadow-box-container max-w-3xl mx-auto p-8">
          <h1 className="text-4xl font-bold mb-4 text-white">About Navia</h1>
          <p className="text-gray-300 mb-6">
            Navia is your central gateway, designed with modern simplicity and smooth user experience in mind. We focus on creating a seamless and elegant platform for your everyday needs.
          </p>
          <p className="text-gray-300 mb-6">
            Built with React, Tailwind CSS, and Framer Motion, Navia offers a responsive and animated interface that balances aesthetics and functionality.
          </p>
          <p className="text-gray-300 mb-8">
            Explore our features and enjoy a clean, efficient design tailored just for you.
          </p>

          {/* Button layout */}
          <div className="buttons-container justify-center">
            <AnimatedButton label="Home" to="/" icon="FiHome" />

          </div>
        </section>
      </motion.main>
    </>
  );
}
