import { useState } from "react";
import api from "../api";

function BloodRequest() {
  const [formData, setFormData] = useState({
    patientId: "",
    bloodGroup: "",
    quantity: "",
    requestDate: "",
    status: "PENDING"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/blood-requests", {
        ...formData,
        patientId: Number(formData.patientId),
        quantity: Number(formData.quantity)
      });

      alert("Blood request submitted successfully!");

      setFormData({
        patientId: "",
        bloodGroup: "",
        quantity: "",
        requestDate: "",
        status: "PENDING"
      });

    } catch (error) {
      console.error(error);
      alert("Failed to submit blood request");
    }
  };

  return (
    <div className="form-page">

      <h1>Blood Request</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="patientId"
          type="number"
          placeholder="Patient ID"
          value={formData.patientId}
          onChange={handleChange}
          required
        />

        <input
          name="bloodGroup"
          type="text"
          placeholder="Blood Group (Example: A+)"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        />

        <input
          name="quantity"
          type="number"
          placeholder="Quantity Required"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <input
          name="requestDate"
          type="date"
          value={formData.requestDate}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit Blood Request
        </button>

      </form>

    </div>
  );
}

export default BloodRequest;