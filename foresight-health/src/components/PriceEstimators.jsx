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
    {
      name: "Community Health Network",
      location: "Indiana",
      url: "https://mychart.ecommunity.com/MyChart/GuestEstimates/",
      description: "Access Community Health Network's MyChart price estimation tool for medical procedures and services"
    },
    {
      name: "Ascension Health",
      location: "Indiana",
      url: "https://price-estimator.ascension.org/select-service/categories",
      description: "Ascension Health's price estimation tool for healthcare services and procedures"
    },
    {
      name: "Franciscan Health",
      location: "Indiana",
      url: "https://www.franciscanhealth.org/patient-resources/hospital-price-transparency",
      description: "Franciscan Health's price transparency tool for hospital services and procedures"
    }
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