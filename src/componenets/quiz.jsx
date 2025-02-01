import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './quiz/quiz.css';
import data from '../assets/data.js';

const Quiz = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [answered, setAnswered] = useState(false);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const checkAns = (e, ans) => {
    if (lock) return;
    if (question.correctOption === ans) {
      e.target.classList.add('correct');
      setScore((prevScore) => prevScore + 1);
    } else {
      e.target.classList.add('wrong');
    }
    setLock(true);
    setAnswered(true);
  };

  const nextQuestion = () => {
    if (index < data.length - 1) {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        setQuestion(data[newIndex]);
        return newIndex;
      });
      setAnswered(false);
      setLock(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setQuestion(data[0]);
    setAnswered(false);
    setLock(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const logout = () => {
    navigate('/login'); // Navigate to login page when logout is clicked
  };

  return (
    <div className="container">
      {/* Logout Button */}
      <button className="logout-button" onClick={logout}>Logout</button>

      <h1 className="do">LET'S DO</h1>
      <hr />

      {quizCompleted ? (
        <>
          <h2>You scored {score} out of {data.length}</h2>
          <button onClick={resetQuiz}>Reset</button>
        </>
      ) : (
        <>
          <h2>{index + 1}. {question.question}</h2>

          <ul>
            <li
              onClick={(e) => checkAns(e, 1)}
              className={answered ? (question.correctOption === 1 ? 'correct' : 'wrong') : ''}
            >
              {question.option1}
            </li>
            <li
              onClick={(e) => checkAns(e, 2)}
              className={answered ? (question.correctOption === 2 ? 'correct' : 'wrong') : ''}
            >
              {question.option2}
            </li>
            <li
              onClick={(e) => checkAns(e, 3)}
              className={answered ? (question.correctOption === 3 ? 'correct' : 'wrong') : ''}
            >
              {question.option3}
            </li>
            <li
              onClick={(e) => checkAns(e, 4)}
              className={answered ? (question.correctOption === 4 ? 'correct' : 'wrong') : ''}
            >
              {question.option4}
            </li>
          </ul>

          <button onClick={nextQuestion} disabled={!answered}>
            Next
          </button>

          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
