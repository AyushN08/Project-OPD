import React, { useState } from 'react';

function PatientQueue({ queue, onUpdateQueue }) {
  const [newPatient, setNewPatient] = useState({ name: '', priority: '' });

  const handleAddPatient = () => {
    // Example: Generate a unique ID for simplicity
    const newId = queue.length ? queue[queue.length - 1].id + 1 : 1;
    const updatedQueue = [...queue, { ...newPatient, id: newId }];
    onUpdateQueue(updatedQueue);
    setNewPatient({ name: '', priority: '' });
  };

  const handleRemovePatient = (id) => {
    const updatedQueue = queue.filter(patient => patient.id !== id);
    onUpdateQueue(updatedQueue);
  };

  return (
    <div>
      <h2>Patient Queue</h2>
      <ul>
        {queue.map(patient => (
          <li key={patient.id}>
            Patient {patient.id}: {patient.name} - Priority: {patient.priority}
            <button onClick={() => handleRemovePatient(patient.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Add Patient</h3>
        <input
          type="text"
          placeholder="Name"
          value={newPatient.name}
          onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Priority"
          value={newPatient.priority}
          onChange={(e) => setNewPatient({ ...newPatient, priority: e.target.value })}
        />
        <button onClick={handleAddPatient}>Add Patient</button>
      </div>
    </div>
  );
}

export default PatientQueue;
