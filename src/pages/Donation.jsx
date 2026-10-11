import { useState } from "react";
import api from "../api";

function Donation() {
  const [formData, setFormData] = useState({
    donorId: "",
    bloodGroup: "",
    quantity: "",
    donationDate: "",
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
      await api.post("/donations", {
        ...formData,
        donorId: Number(formData.donorId),
        quantity: Number(formData.quantity)
      });

      alert("Donation submitted successfully!");

      setFormData({
        donorId: "",
        bloodGroup: "",
        quantity: "",
        donationDate: "",
        status: "PENDING"
      });

    } catch (error) {
      console.error(error);
      alert("Failed to submit donation");
    }
  };

  return (
    <div className="form-page">

      <h1>Blood Donation</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="donorId"
          type="number"
          placeholder="Donor ID"
          value={formData.donorId}
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
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <input
          name="donationDate"
          type="date"
          value={formData.donationDate}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit Donation
        </button>

      </form>

    </div>
  );
}

export default Donation;