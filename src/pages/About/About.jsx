
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const questions = [
  {
    question: "What is the primary function of a circuit breaker in a power system?",
    options: ["Regulate voltage", "Measure current", "Protect the system from overloads and short circuits", "Store electrical energy"],
    answer: "Protect the system from overloads and short circuits",
  },
  {
    question: "Which type of power plant uses the Rankine cycle?",
    options: ["Hydroelectric", "Nuclear", "Thermal", "Solar"],
    answer: "Thermal",
  },
  {
    question: "What is the purpose of a relay in a power system?",
    options: ["Step up voltage", "Detect faults and isolate faulty sections", "Convert AC to DC", "Store energy"],
    answer: "Detect faults and isolate faulty sections",
  },
  {
    question: "What is the typical voltage level for long-distance transmission lines?",
    options: ["11 kV", "33 kV", "132 kV", "400 kV"],
    answer: "400 kV",
  },
  {
    question: "Which type of fault is most severe in a power system?",
    options: ["Line-to-ground fault", "Line-to-line fault", "Three-phase fault", "Open circuit fault"],
    answer: "Three-phase fault",
  },
  {
    question: "What is the primary purpose of a transformer in a power system?",
    options: ["Generate power", "Step up or step down voltage levels", "Store electrical energy", "Convert AC to DC"],
    answer: "Step up or step down voltage levels",
  },
  {
    question: "Which device is used to improve the power factor in a power system?",
    options: ["Transformer", "Capacitor bank", "Circuit breaker", "Relay"],
    answer: "Capacitor bank",
  },
];

const About = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        newScore += 1;
      }
    });

    setScore(newScore);

    // Show Toastify notifications based on the score
    if (newScore > 5) {
      toast.success("🎉 You are Eligible for the Job!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else if (newScore < 3) {
      toast.error("📚 You should work hard!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      toast.info("🔍 You can improve! Keep going!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-lg mx-auto p-5 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">MCQ Test for EEE (Power Systems)</h2>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-sm text-gray-600">
            Score: {score !== null ? `${score} / ${questions.length}` : "Not yet submitted"}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option, i) => (
            <label key={i} className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
              <input
                type="radio"
                name={`question-${currentQuestionIndex}`}
                value={option}
                checked={selectedAnswers[currentQuestionIndex] === option}
                onChange={() => handleOptionChange(currentQuestionIndex, option)}
                className="mr-3"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default About;