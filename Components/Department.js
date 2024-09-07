// src/App.js
import React from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import './Department.css';
import Cardiology from './images/cardiology.jpg';
import GeneralMedicine from './images/generalmedicine.jpg';
import Dermatology from './images/dermatology.jpg';
import orthopedics from './images/orthopedics.jpg';
import internalmedicine from './images/internalmedicine.jpg';
import pediatrics from './images/pediatrics.jpg';
import neurology from './images/neurologist.jpg';
import oncology from './images/oncology.jpg';
import obgy from './images/obgy.jpg';
import physio from './images/physio.png';

const departments = [
  { name: "General Medicine", image: GeneralMedicine, staffCount: 10, doctors: ["Dr. Arvind Sharma (MBBS, MD)", "Dr. Priya Nair (MBBS, MD)"] },
  { name: "Cardiology", image: Cardiology, staffCount: 8, doctors: ["Dr. Rajesh Kumar (MBBS, DM Cardiology)", "Dr. Meena Reddy (MBBS, DM Cardiology)"] },
  { name: "Pediatrics", image: pediatrics, staffCount: 12, doctors: ["Dr. Rakesh Gupta (MBBS, MD Pediatrics)", "Dr. Neha Verma (MBBS, MD Pediatrics)"] },
  { name: "Dermatology", image: Dermatology, staffCount: 6, doctors: ["Dr. Swati Singh (MBBS, MD Dermatology)", "Dr. Amitabh Roy (MBBS, MD Dermatology)"] },
  { name: "Internal Medicine", image: internalmedicine, staffCount: 11, doctors: ["Dr. Kiran Deshmukh (MBBS, MD)", "Dr. Satish Agarwal (MBBS, MD)"] },
  { name: "Orthopedics", image: orthopedics, staffCount: 9, doctors: ["Dr. Suresh Patil (MBBS, MS Orthopedics)", "Dr. Varun Chatterjee (MBBS, MS Orthopedics)"] },
  { name: "Neurology", image: neurology, staffCount: 7, doctors: ["Dr. Anjali Mathur (MBBS, DM Neurology)", "Dr. Abhinav Khanna (MBBS, DM Neurology)"] },
  { name: "Oncology", image: oncology, staffCount: 5, doctors: ["Dr. Kavita Das (MBBS, MD Oncology)", "Dr. Ravi Iyer (MBBS, MD Oncology)"] },
  { name: "Physiology", image: physio, staffCount: 6, doctors: ["Dr. Arya Shetty (MBBS, MBBS Physiology)", "Dr. Ravi Iyer (MBBS, MD Physiology)"] },
  { name: "Obstetrics and Gynecology", image: obgy, staffCount: 4, doctors: ["Dr. Shalini Mishra (MBBS, MD Obstetrics & Gynecology)", "Dr. Neeraj Chopra (MBBS, MD Obstetrics & Gynecology)"] }
];

const DoctorDetails = () => {
  const { departmentId } = useParams();
  const department = departments[parseInt(departmentId, 10)];

  if (!department) return <p>Department not found!</p>;

  return (
    <div className="doctors">
      <h1>{department.name} Doctors</h1>
      {department.doctors.map((doctor, i) => (
        <div className="doctor-item" key={i}>
          <h2>{doctor}</h2>
        </div>
      ))}
    </div>
  );
};

const DepartmentCard = ({ department, index }) => {
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/doctors/${index}`);
  };

  return (
    <div className="department-card">
      <img src={department.image} alt={department.name} />
      <h3>{department.name}</h3>
      <div className="actions">
        <button onClick={handleSeeDetails}>
          Show Doctors
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1 className="departments-heading">Departments</h1>
            <div className="departments-grid">
              {departments.map((department, index) => (
                <DepartmentCard key={index} department={department} index={index} />
              ))}
            </div>
          </div>
        }
      />
      <Route path="/doctors/:departmentId" element={<DoctorDetails />} />
    </Routes>
  );
};

export default App;
