import { useState } from "react";
import api from "../api";

function Donor() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    age: "",
    gender: "",
    address: ""
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
      await api.post("/donors", {
        ...formData,
        age: Number(formData.age)
      });

      alert("Donor registered successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        bloodGroup: "",
        age: "",
        gender: "",
        address: ""
      });

    } catch (error) {
      console.error(error);
      alert("Failed to register donor");
    }
  };

  return (
  <div className="form-page">

    <h1>Donor Registration</h1>

    <form onSubmit={handleSubmit}>

        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          name="bloodGroup"
          type="text"
          placeholder="Blood Group"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        />

        <input
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <input
          name="gender"
          type="text"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />

        <input
          name="address"
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Register Donor
        </button>

      </form>
    </div>
  );
}

export default Donor;