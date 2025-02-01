// src/components/home.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from "react-router-dom"; // Correct hook for React Router v6
import "./home.css";
const Home = () => {
  const navigate = useNavigate();  // useNavigate replaces useHistory


  return (
    <div>
      <h3 align="center">Welcome to the BrainBlast</h3>
      <p>Are you ready to test your knowledge and challenge yourself? Our Quiz App offers a fun and engaging way to learn new facts, refresh your memory, and compete with friends or challenge your own best scores.

Features:

Interactive Quiz Format: Answer multiple-choice questions in various categories.
Real-Time Feedback: Instantly see if your answers are correct or wrong.
Track Your Progress: Monitor your score as you progress through the quiz.
User-Friendly Interface: Simple design for an easy and seamless experience.
Quiz Completion: Know your score at the end and challenge yourself again!
Get Started Today! Whether you're looking to brush up on your knowledge or enjoy a bit of trivia, our Quiz App is perfect for all learners. Sign up now to get started!

</p>
      <div className="register-forget opacity">
            <p>Do you want to start the Quiz? </p><Link to="/reg" className="start-btn">Start BRAINING</Link>
            
    </div>
    </div>
  );
};

export default Home;
