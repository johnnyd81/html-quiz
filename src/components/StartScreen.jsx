import React from "react";

const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to the HTML quiz!!</h2>
      <h3>{numQuestions} questions to test your knowledge</h3>
      <button
        className="btn start-btn"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
};

export default StartScreen;
