import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

const FeedbackForm = () => {
  const navigate = useNavigate(); 

  const [feedbackOptions, setFeedbackOptions] = useState([
    {
      title: "Satisfied",
      votes: 0,
      color: "bg-green-500",
    },
    {
      title: "Neutral",
      votes: 0,
      color: "bg-yellow-500",
    },
    {
      title: "Unsatisfied",
      votes: 0,
      color: "bg-red-500",
    },
  ]);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleIncrementVote = (feedback) => {
    if (selectedOption) return;

    setSelectedOption(feedback.title);

    const newFeedback = { ...feedback, votes: feedback.votes + 1 };
    setFeedbackOptions((prev) =>
      prev.map((f) => (f.title === newFeedback.title ? newFeedback : f))
    );
  };

  const handleSubmitFeedback = () => {
    setNotificationMessage("Feedback submitted successfully! Thank you.");
    setShowNotification(true);

    setTimeout(() => {
      navigate("/user-login-reported-incidents");
    }, 2000);
  };

  const handleResetVotes = () => {
    setFeedbackOptions((prev) =>
      prev.map((option) => ({ ...option, votes: 0 }))
    );
    setSelectedOption(null); 
  };

  const handleNotNow = () => {
    navigate("/user-login-reported-incidents");
  };

  return (
    <section className="bg-slate-900 px-4 py-12 flex items-center justify-center min-h-screen">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-2 md:grid-cols-[1fr_400px] md:gap-12">
        <div className="col-span-1 py-12">
          <h3 className="mb-6 text-3xl font-semibold text-slate-50">
            Tell Us What You Think Of Our Service
          </h3>
          <div className="mb-6 space-y-2">
            {feedbackOptions.map((option) => (
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => handleIncrementVote(option)}
                key={option.title}
                className={`w-full rounded-md ${option.color} py-2 font-medium text-white ${
                  selectedOption === option.title ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={selectedOption} 
              >
                {option.title}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={handleNotNow}
              className="w-full rounded-md bg-gray-500 py-2 font-medium text-white"
            >
              Not Now
            </motion.button>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={handleSubmitFeedback}
              className="rounded-sm bg-slate-700 px-4 py-2 text-sm font-medium text-slate-200"
            >
              Submit Feedback
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={handleResetVotes}
              className="rounded-sm bg-slate-700 px-4 py-2 text-sm font-medium text-slate-200"
            >
              Reset Vote
            </motion.button>
          </div>
        </div>

        <div
          className="col-span-1 grid min-h-[200px] gap-2"
          style={{
            gridTemplateColumns: `repeat(${feedbackOptions.length}, minmax(0, 1fr))`,
          }}
        >
          {feedbackOptions.map((option) => {
            const height = option.votes
              ? (
                  (option.votes /
                    feedbackOptions.reduce((acc, cv) => acc + cv.votes, 0)) *
                  100
                ).toFixed(2)
              : 0;
            return (
              <div key={option.title} className="col-span-1">
                <div className="relative flex h-full w-full items-end overflow-hidden rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800">
                  <motion.span
                    animate={{ height: `${height}%` }}
                    className={`relative z-0 w-full ${option.color}`}
                    transition={{ type: "spring" }}
                  />
                  <span className="absolute bottom-0 left-[50%] mt-2 inline-block w-full -translate-x-[50%] p-2 text-center text-sm text-slate-50">
                    <b>{option.title}</b>
                    <br />
                    <span className="text-xs text-slate-200">
                      {option.votes} votes
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showNotification && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white p-4 rounded-md shadow-lg">
          {notificationMessage}
        </div>
      )}
    </section>
  );
};

export default FeedbackForm;
