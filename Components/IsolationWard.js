import React, { useState } from 'react';
import './IsolationWard.css'; // Assuming you're using CSS for styling

function IsolationWardManagement() {
  const [temperature, setTemperature] = useState(36.9);
  const [ventilationUnits, setVentilationUnits] = useState(5);
  const [sanitizerStatus, setSanitizerStatus] = useState(true);
  const [airPressure, setAirPressure] = useState('Normal');
  const [lighting, setLighting] = useState('Medium');
  const [alarm, setAlarm] = useState(false);

  const simulateTemperatureChange = () => {
    const newTemp = Math.random() * (39 - 36) + 36; // Random temperature between 36 and 39
    setTemperature(newTemp.toFixed(1));
  };

  const toggleSanitizer = () => {
    setSanitizerStatus(!sanitizerStatus);
  };

  const addVentilation = () => {
    setVentilationUnits(ventilationUnits + 1);
  };

  const removeVentilation = () => {
    if (ventilationUnits > 0) {
      setVentilationUnits(ventilationUnits - 1);
    }
  };

  const toggleAlarm = () => {
    setAlarm(!alarm);
  };

  const adjustAirPressure = () => {
    setAirPressure(airPressure === 'Normal' ? 'High' : 'Normal');
  };

  const adjustLighting = () => {
    const nextLevel = lighting === 'Low' ? 'Medium' : lighting === 'Medium' ? 'High' : 'Low';
    setLighting(nextLevel);
  };

  return (
    <div className="isolation-ward-container">
      <h1>Hospital Management System</h1>
      <h2>Isolation Ward Management</h2>

      <div className="key-features">
        <div className="feature">
          <h3>Hand Sanitizer Dispenser</h3>
          <p>Status: {sanitizerStatus ? 'Operational' : 'Off'}</p>
          <button onClick={toggleSanitizer}>Toggle Sanitizer Status</button>
        </div>

        <div className="feature">
          <h3>Temperature Detection</h3>
          <p>Current Temperature: {temperature}°C</p>
          <button onClick={simulateTemperatureChange}>Simulate Temperature Change</button>
        </div>

        <div className="feature">
          <h3>Ventilation Units</h3>
          <p>Ventilation Units: {ventilationUnits}</p>
          <button onClick={addVentilation}>Add Ventilation</button>
          <button onClick={removeVentilation}>Remove Ventilation</button>
        </div>

        <div className="feature">
          <h3>Air Pressure Control</h3>
          <p>Current Pressure: {airPressure}</p>
          <button onClick={adjustAirPressure}>Adjust Air Pressure</button>
        </div>

        <div className="feature">
          <h3>Lighting Control</h3>
          <p>Current Lighting: {lighting}</p>
          <button onClick={adjustLighting}>Adjust Lighting</button>
        </div>

        <div className="feature">
          <h3>Alarm System</h3>
          <p>Status: {alarm ? 'On' : 'Off'}</p>
          <button onClick={toggleAlarm}>Toggle Alarm</button>
        </div>
      </div>
    </div>
  );
}

export default IsolationWardManagement;
