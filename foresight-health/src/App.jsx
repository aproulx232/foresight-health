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
                <Link to="/foresight-health/home">Home</Link>
              </li>
              <li>
                <Link to="/foresight-health/estimators">Price Estimators</Link>
              </li>
              <li>
                <Link to="/foresight-health/services">Services</Link>
              </li>
              <li>
                <Link to="/foresight-health/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/foresight-health/home" element={<Home />} />
            <Route path="/foresight-health/estimators" element={<EstimatorPage />} />
            <Route path="/foresight-health/services" element={<div>Services Page</div>} />
            <Route path="/foresight-health/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
