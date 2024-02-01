import React from "react";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="home-area">
      <h1 className="text-center">Quiz App</h1>
      <button onClick={startQuiz} className="play-btn">
        Play
      </button>
    </div>
  );
}

export default Home;
