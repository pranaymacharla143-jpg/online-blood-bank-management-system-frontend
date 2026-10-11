import { useEffect, useState } from "react";
import api from "../api";

function AdminPatients() {
  const [patients, setPatients] = useState([]);

  const loadPatients = async () => {
    try {
      const response = await api.get("/patients");
      setPatients(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load patients");
    }
  };

  useEffect(() => {
    loadPatients();
  }, []);

  return (
    <div className="form-page">
      <h1>Manage Patients</h1>

      {patients.length === 0 ? (
        <p>No patients registered.</p>
      ) : (
        <div className="features">
          {patients.map((patient) => (
            <div className="card" key={patient.id}>
              <h3>{patient.name}</h3>
              <p>Email: {patient.email}</p>
              <p>Phone: {patient.phone}</p>
              <p>Blood Group: {patient.bloodGroup}</p>
              <p>Age: {patient.age}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminPatients;