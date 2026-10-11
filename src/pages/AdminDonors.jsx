import { useEffect, useState } from "react";
import api from "../api";

function AdminDonors() {
  const [donors, setDonors] = useState([]);

  const loadDonors = async () => {
    try {
      const response = await api.get("/donors");
      setDonors(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load donors");
    }
  };

  useEffect(() => {
    loadDonors();
  }, []);

  return (
    <div className="form-page">
      <h1>Manage Donors</h1>

      {donors.length === 0 ? (
        <p>No donors registered.</p>
      ) : (
        <div className="features">
          {donors.map((donor) => (
            <div className="card" key={donor.id}>
              <h3>{donor.name}</h3>
              <p>Email: {donor.email}</p>
              <p>Phone: {donor.phone}</p>
              <p>Blood Group: {donor.bloodGroup}</p>
              <p>Age: {donor.age}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDonors;