import React, { useState } from 'react';

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Who invented React?",
    options: ["Mark Zuckerberg", "Dan Abramov", "Jordan Walke", "Elon Musk"],
    answer: "Jordan Walke"
  },
  {
    question: "Which hook is used for state in React?",
    options: ["useRef", "useEffect", "useState", "useReducer"],
    answer: "useState"
  }
];

function QuizApp() {
  const [currentQ, setCurrentQ] = useState(0); 
  const [score, setScore] = useState(0); 
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ); // Move to next snapshot (question)
    } else {
      setShowResult(true); 
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center", fontFamily: "Arial", backgroundColor: "pink" }}>
      <h2>🧠 React Quiz App</h2>

      {showResult ? (
        <div>
          <h3>🎉 You scored {score} / {questions.length}</h3>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQ].question}</h3>
          {questions[currentQ].options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt)}
              style={{
                display: "block",
                margin: "10px auto",
                padding: "10px 20px",
                fontSize: "16px"
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizApp;
