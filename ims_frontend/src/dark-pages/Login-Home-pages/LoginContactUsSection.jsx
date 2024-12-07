import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiTwitter } from "react-icons/fi";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import PropTypes from "prop-types"; 

export const LoginContactUsSection = () => {
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-50" style={{ backgroundColor: "#1a202c" }}>
      <Header />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

// PropTypes validation for Block
Block.propTypes = {
  className: PropTypes.string, 
};

const Header = () => (
  <div className="text-center mb-12">
    <h1 className="text-4xl font-medium leading-tight text-zinc-50">Contact Us</h1>
  </div>
);

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <h1 className="mb-12 text-4xl font-medium leading-tight">Get in Touch</h1>
    <a href="/user-login-contact-us" className="flex items-center gap-1 text-red-300 hover:underline">
      Contact Us <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.1 }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="https://web.facebook.com/SLTMobitel/?_rdc=1&_rdr#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiFacebook />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.1 }}
      className="col-span-6 bg-rose-600 md:col-span-3"
    >
      <a
        href="https://www.instagram.com/sltmobitel_official/?hl=en"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiInstagram />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.1 }}
      className="col-span-6 bg-blue-50 md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/company/srilankatelecom?originalSubdomain=l"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.1 }}
      className="col-span-6 bg-black-500 md:col-span-3"
    >
      <a
        href="https://x.com/slt_mobitel?lang=en"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FiTwitter />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      <span className="text-zinc-400">
        Need assistance? Contact SLT Mobitel via our customer service hotlines, email, or visit a nearby service center. We are here to provide reliable support for all your telecommunication needs.
      </span>
    </p>
  </Block>
);
