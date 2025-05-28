import AnimatedButton from "../Components/AnimatedButton";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // import logo properly
import bgImage from "/bg.png";

export default function Home() {
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
        {/* Logo container with subtle animation */}
        <div className="logo-container">
          <img
            src={logo}
            alt="Navia Logo"
            className="logo"
          />
        </div>

        {/* Soft shadow box container */}
        <section className="shadow-box-container">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Navia</h1>
          <p className="text-gray-300 mb-6">
            Your central gateway. Choose a destination to continue.
          </p>

          {/* Button layout */}
          <div className="buttons-container">
            <AnimatedButton label="About" to="/about" icon="FiInfo" />
          </div>
        </section>
      </motion.main>
    </>
  );
}
