import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import EstimatorPage from "./pages/EstimatorPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Foresight Health</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/estimators">Price Estimators</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estimators" element={<EstimatorPage />} />
            <Route path="/services" element={<div>Services Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
