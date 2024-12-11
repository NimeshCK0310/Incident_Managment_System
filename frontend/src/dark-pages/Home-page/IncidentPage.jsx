import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; 
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UserHomeNavbar from "./UserHomeNavbar";
import  FooterComp  from "../../components/FooterComp";

export const IncidentPage = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1a202c" }}>
      <UserHomeNavbar />
      <div className="flex-grow pt-20">
        <div className="flex flex-col items-center px-8 py-24 text-neutral-100">
          <h1 className="text-4xl font-medium mb-8 text-white">Report Incident</h1>
          <BlockInTextCard
            tag="/ Incident Management System "
            text={<strong>Access Denied</strong>}
            examples={[
              "You need to be signed in to access this page. Please Sign in to continue.",
              "You need to be signed in to access this page. Please Sign in to continue.",
              "You need to be signed in to access this page. Please Sign in to continue.",
              "You need to be signed in to access this page. Please Sign in to continue.",
            ]}
          />
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

const BlockInTextCard = ({ tag, text, examples }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xl space-y-6 bg-gray-800 p-6 rounded-lg shadow-md">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase text-gray-400">{tag}</p>
        <hr className="border-gray-600" />
      </div>
      <p className="max-w-lg text-xl leading-relaxed text-gray-300">{text}</p>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-gray-600 mt-4" />
      </div>
      <button
        onClick={() => navigate("/signin")}
        className="w-full rounded-full border border-gray-400 py-2 text-sm font-medium text-gray-400 hover:bg-gray-400 hover:text-gray-800 transition-colors"
      >
        Sign In
      </button>
    </div>
  );
};

BlockInTextCard.propTypes = {
  tag: PropTypes.string.isRequired, 
  text: PropTypes.node.isRequired,
  examples: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

// Typewriter animation component
const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((prevIndex) => (prevIndex + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [examples]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase text-gray-400">
      <span className="inline-block h-2 w-2 bg-gray-400" />
      <span className="ml-3">
        INFO:{" "}
        {examples[exampleIndex].split("").map((char, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {char}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-gray-400"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};

Typewrite.propTypes = {
  examples: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default IncidentPage;
