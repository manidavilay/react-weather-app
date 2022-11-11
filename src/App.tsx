import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from './pages/weather/Weather';
import Error from "./pages/error/Error";
import Footer from './layouts/footer/Footer';
import './App.css';
import "./assets/styles/styles.scss";

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
