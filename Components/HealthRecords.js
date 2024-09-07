import React from 'react';
import './App.css'; // Add styling for your app

const HealthRecords = () => {
  // Sample data for lab results
  const labResults = [
    {
      date: '5 MAY',
      testName: 'COMPLETE BLOOD COUNT',
      doctor: 'Dr. Abha Gupta',
      resultStatus: '20',
      range: '25-80',
    },
    {
      date: '2 MAY',
      testName: 'VITAMIN D TEST',
      doctor: 'Dr. Abha Gupta',
      resultStatus: '20↓',
      range: '25-80',
    },
    {
      date: '21 APR',
      testName: 'HAEMOGLOBIN TEST',
      doctor: 'Dr. Dhruva Kumar Meda',
      resultStatus: '15',
      range: '14-18',
    },
    {
      date: '12 MAR',
      testName: 'CHEST X RAY',
      doctor: 'Dr. Rachit Saxena',
      resultStatus: 'View',
    },
  ];

  // Define a valid report download link
  const downloadReport = () => {
    // You should use an actual hosted link to the report
    const link = document.createElement('a');
    link.href = 'https://cdn1.lalpathlabs.com/live/reports/WM17S.pdf';  // Replace with actual hosted file URL
    link.download = 'full_report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="health-records">
      <header className="header">
        <h1>Health Records</h1>
        <h2>Priyanka Shah</h2>
      </header>

      <div className="report-section">
        <h3>Reports</h3>
        <div className="report-list">
          {labResults.map((record, index) => (
            <div key={index} className="report-item">
              <div className="date">{record.date}</div>
              <div className="report-details">
                <p className="test-name">{record.testName}</p>
                <p className="doctor-name">{record.doctor}</p>
              </div>
              <div className="result">
                <span className="result-status">{record.resultStatus}</span>
                {record.range && <span className="range">({record.range})</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Download Full Report Button */}
        <div className="download-full-report">
          <button className="download-button" onClick={downloadReport}>
            Download Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthRecords;
