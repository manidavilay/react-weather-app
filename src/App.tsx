import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from './pages/weather/Weather';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={<Weather />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
