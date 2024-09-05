import React from 'react';
import './BedAvail.css';

const BedAvailability = () => {
  const totalBeds = 20;
  const occupiedBedPositions = [9, 14, 19]; // Fixed positions for the 3 red (occupied) beds (indices for Bed 10, 15, and 20)

  // Initialize all beds as available (1) or booked (2)
  const bedStatuses = Array(totalBeds).fill(null).map(() => Math.random() > 0.5 ? 1 : 2);

  // Assign fixed red beds (occupied) to specified positions
  occupiedBedPositions.forEach(position => {
    bedStatuses[position] = 3; // 3 represents 'occupied'
  });

  const getBedColor = (status) => {
    switch (status) {
      case 1: return '#28a745';    // Available - Green
      case 2: return '#ffc107';    // Booked - Yellow
      case 3: return '#dc3545';    // Occupied - Red
      default: return 'gray';      // Default color (just in case)
    }
  };

  return (
    <div className="bed-availability-container">
      <h2>Bed Availability</h2>
      {/* Legend */}
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#28a745' }}></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#ffc107' }}></div>
          <span>Booked</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#dc3545' }}></div>
          <span>Occupied</span>
        </div>
      </div>
      {/* Bed grid */}
      <div className="beds-card">
        <div className="beds-grid">
          {bedStatuses.map((status, index) => (
            <div
              key={index}
              className="bed"
              style={{ backgroundColor: getBedColor(status) }}
            >
              Bed {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BedAvailability;