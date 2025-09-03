import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ParticleBackground from './components/ParticleBackground';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ParticleBackground />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </main>
        
        {/* Cosmic background elements */}
        <div className="cosmic-background">
          <div className="cosmic-gradient"></div>
          <div className="stars">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className="star" 
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
