import React from 'react';
import './PriceEstimators.css';

function PriceEstimators() {
  const hospitalLinks = [
    {
      name: "IU Health",
      location: "Indiana",
      url: "https://iuhealth.org/schedule-an-appointment/price-estimates",
      description: "Price estimation tool for IU Health services and procedures"
    },
    // Add more hospitals here in the same format
  ];

  return (
    <div className="price-estimators">
      <header className="estimators-header">
        <h1>Hospital Price Estimator Tools</h1>
        <p>Find transparent pricing for medical procedures at various hospitals</p>
      </header>

      <div className="estimators-grid">
        {hospitalLinks.map((hospital, index) => (
          <div key={index} className="hospital-card">
            <h2>{hospital.name}</h2>
            <p className="location">Location: {hospital.location}</p>
            <p className="description">{hospital.description}</p>
            <a 
              href={hospital.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="estimate-button"
            >
              Get Price Estimate
            </a>
          </div>
        ))}
      </div>

      <div className="info-section">
        <h3>About Price Estimators</h3>
        <p>
          These tools provide estimated costs for medical procedures and services. 
          Please note that actual costs may vary based on individual circumstances, 
          insurance coverage, and specific medical needs.
        </p>
      </div>
    </div>
  );
}

export default PriceEstimators;