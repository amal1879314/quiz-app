// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './componenets/quiz.jsx'; // Your Quiz component
import Registration from './componenets/regi.jsx'; // Newly created Registration component
import Login from './componenets/login.jsx'; // Your Login component
import Header from './componenets/header.jsx'; // Import Header component
import Footer from './componenets/footer.jsx'; // Import Footer component
import Home from './componenets/home.jsx'; // Home component import

const App = () => {
  return (
    <Router>
      {/* Render Header on all pages */}
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qwerty" element={<Quiz />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} /> {/* Home route */}
        </Routes>
      </main>

      {/* Render Footer on all pages */}
      <Footer />
    </Router>
  );
};

export default App;
