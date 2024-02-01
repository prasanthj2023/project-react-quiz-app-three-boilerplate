import React, { useState } from "react";
import questionsData from "./question.json";
import "../CSS/Quiz.css";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const navigate = useNavigate();

  const backToHome =  () => {
    navigate(-1);
  }

  const handleAnswerClick = (selectedAnswer) => {
    setAttempts(attempts + 1);

    if (selectedAnswer === questionsData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === questionsData.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAttempts(0);
    setShowResult(false);
  };

  return (
    <div className="container">
      {showResult ? (
        <div className="result-div">
          <h1 className="result-heading">Result</h1>
          <div className="dialogbox">
            <h2>{`Your score is ${(score / questionsData.length) * 100}%`}</h2>
            <div className="details">
              <div className="noofq">
                <h3>Total Number of Questions</h3>
                <p>{questionsData.length}</p>
              </div>
              <div className="noofa">
                <h3>Total Number of Attempts</h3>
                <p>{attempts}</p>
              </div>
              <div className="noofc">
                <h3>Total Number of Correct Answers</h3>
                <p>{score}</p>
              </div>
              <div className="noofw">
                <h3>Total Number of Wrong Answers</h3>
                <p>{attempts - score}</p>
              </div>
            </div>
            <div className="two-buttons">
              <button id="play-again" onClick={resetQuiz}>Play Again</button>
              <button onClick={backToHome} id="back-2-home">Back to Home</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="heading-text">Question</h1>
          <div className="number">
            <h4>
              <span>{currentQuestionIndex + 1}</span> of <span>{questionsData.length}</span>
            </h4>
          </div>
          <h2 className="question">{questionsData[currentQuestionIndex].question}</h2>
          <div className="answers">
            {questionsData[currentQuestionIndex].options.map((option, index) => (
              <div
                key={index}
                className="options"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
